<script lang="ts">
	import { media, pauseOtherMedia } from '#lib/media';
	let {
		file,
		label,
		forthcoming,
	}: { file?: string; label: string; forthcoming: string } = $props();
	let failed = $state(false);
	const source = $derived(media(file));
</script>

{#if source && !failed}
	<audio
		controls
		preload="none"
		aria-label={label}
		onerror={() => (failed = true)}
		onplay={event => pauseOtherMedia(event.currentTarget)}
	>
		<source src={source} onerror={() => (failed = true)} />
	</audio>
{:else}<span class="media-status">{forthcoming}</span>{/if}
