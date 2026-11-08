import { createServer } from 'node:http';
import { createReadStream, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, sep, extname } from 'node:path';
const root = resolve('docs');
const port = Number(process.env.PORT || 5174);
const types = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.json': 'application/json',
	'.xml': 'application/xml',
	'.txt': 'text/plain',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.webp': 'image/webp',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.mp3': 'audio/mpeg',
	'.mp4': 'video/mp4',
	'.pdf': 'application/pdf',
};
createServer((request, response) => {
	const url = new URL(request.url, 'http://localhost');
	if (url.pathname === '/') {
		response.writeHead(308, { location: '/nl/' + url.search });
		return response.end();
	}
	let file;
	try {
		file = resolve(root, '.' + decodeURIComponent(url.pathname));
	} catch {
		response.writeHead(400);
		return response.end();
	}
	if (!file.startsWith(root + sep)) {
		response.writeHead(404);
		return response.end();
	}
	if (existsSync(file) && statSync(file).isDirectory()) {
		if (!url.pathname.endsWith('/')) {
			response.writeHead(308, {
				location: url.pathname + '/' + url.search,
			});
			return response.end();
		}
		file = resolve(file, 'index.html');
	}
	const found = existsSync(file) && statSync(file).isFile();
	if (!found) file = resolve(root, '404.html');
	// Native audio/video controls need byte ranges for duration and seeking.
	if (found && ['.mp3', '.mp4'].includes(extname(file))) {
		const size = statSync(file).size;
		const headers = { 'content-type': types[extname(file)], 'accept-ranges': 'bytes' };
		let start = 0;
		let end = size - 1;
		if (request.headers.range) {
			const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.range);
			if (range && (range[1] || range[2])) {
				start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
				end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
			}
			if (!range || !(range[1] || range[2]) || !Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) {
				response.writeHead(416, { ...headers, 'content-range': `bytes */${size}` });
				return response.end();
			}
			headers['content-range'] = `bytes ${start}-${end}/${size}`;
		}
		headers['content-length'] = end - start + 1;
		response.writeHead(request.headers.range ? 206 : 200, headers);
		if (request.method === 'HEAD') return response.end();
		const stream = createReadStream(file, { start, end });
		response.on('close', () => stream.destroy());
		stream.on('error', () => response.destroy());
		return stream.pipe(response);
	}
	response.writeHead(found ? 200 : 404, {
		'content-type': types[extname(file)] || 'application/octet-stream',
		...(found ? {} : { 'x-robots-tag': 'noindex' }),
	});
	response.end(request.method === 'HEAD' ? undefined : readFileSync(file));
}).listen(port, '127.0.0.1', () =>
	console.log(`Local: http://127.0.0.1:${port}/`),
);
