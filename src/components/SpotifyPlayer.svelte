<script lang="ts">
	import { spotifyAlbumEmbed } from '#lib/spotify';
	import type { Copy } from '#locales';
	let { url, title, copy }: { url?: string; title: string; copy: Copy } =
		$props();
	let open = $state(false);
	const embed = $derived(spotifyAlbumEmbed(url));
</script>

{#if embed}
	<details class="spotify-player" bind:open>
		<summary>{copy.spotify.player}</summary>
		{#if open}
			<iframe
				src={embed}
				title={`${copy.spotify.player}: ${title}`}
				width="100%"
				height="640"
				loading="lazy"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				allowfullscreen
			></iframe>
			<p class="spotify-fallback">
				<a href={url} target="_blank" rel="noreferrer"
					>{copy.spotify.external} ↗</a
				>
			</p>
		{/if}
		<noscript><a href={url}>{copy.spotify.external} ↗</a></noscript>
	</details>
{/if}
