const mediaFiles = new Set(__MEDIA_FILES__);

export function externalLink(value?: string): string | undefined {
	if (!value) return undefined;
	try {
		const url = new URL(value);
		return ['https:', 'http:'].includes(url.protocol) ?
				url.href
			:	undefined;
	} catch {
		return undefined;
	}
}

export function media(file?: string): string | undefined {
	if (!file) return undefined;
	const normalized = file.replace(/^\/?assets\//, '');
	return mediaFiles.has(normalized) ? `/assets/${normalized}` : undefined;
}

export function pauseOtherMedia(current: HTMLMediaElement) {
	document
		.querySelectorAll<HTMLMediaElement>('audio, video')
		.forEach(element => {
			if (element !== current) element.pause();
		});
}
