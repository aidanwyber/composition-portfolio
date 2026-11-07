import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, sep, extname } from 'node:path';
const root = resolve('build');
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
	response.writeHead(found ? 200 : 404, {
		'content-type': types[extname(file)] || 'application/octet-stream',
		...(found ? {} : { 'x-robots-tag': 'noindex' }),
	});
	response.end(request.method === 'HEAD' ? undefined : readFileSync(file));
}).listen(port, '127.0.0.1', () =>
	console.log(`Local: http://127.0.0.1:${port}/`),
);
