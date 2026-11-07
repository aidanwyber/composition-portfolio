<script lang="ts">
	import type { Snippet } from 'svelte';
	import { media, pauseOtherMedia } from '#lib/media';
	let {
		file,
		poster,
		label,
		unsupported,
		fallback,
	}: {
		file?: string;
		poster?: string;
		label: string;
		unsupported: string;
		fallback: Snippet;
	} = $props();
	let failed = $state(false);
	const source = $derived(media(file));
</script>

{#if source && !failed}
	<div class="video-frame">
		<!-- Instrumental portfolio video; add caption tracks if spoken content is supplied. -->
		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			class="reel-player"
			controls
			playsinline
			preload="none"
			poster={media(poster)}
			aria-label={label}
			onerror={() => (failed = true)}
			onplay={event => {
				pauseOtherMedia(event.currentTarget);
			}}
		>
			<source src={source} onerror={() => (failed = true)} />{unsupported}
		</video>
	</div>
{:else}{@render fallback()}{/if}
