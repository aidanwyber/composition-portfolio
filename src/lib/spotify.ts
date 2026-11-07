// Derive embeds only from actual configured Spotify album URLs.
export function spotifyAlbumEmbed(value?: string): string | undefined {
	if (!value) return undefined;
	try {
		const url = new URL(value);
		if (url.protocol !== 'https:' || url.hostname !== 'open.spotify.com')
			return undefined;
		const id = url.pathname.match(
			/^\/(?:intl-[a-z]{2}\/)?(?:embed\/)?album\/([a-zA-Z0-9]{22})\/?$/,
		)?.[1];
		return id ?
				`https://open.spotify.com/embed/album/${id}?theme=0`
			:	undefined;
	} catch {
		return undefined;
	}
}
