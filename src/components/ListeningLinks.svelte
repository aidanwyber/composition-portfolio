<script lang="ts">
	import type { AlbumLinks } from '#data/albumLinks';
	let {
		links,
		title,
		listenLabel,
	}: {
		links: { name: string; url: string; platform?: keyof AlbumLinks }[];
		title: string;
		listenLabel: string;
	} = $props();
</script>

{#each links as link}
	<a
		class:platform-button={!!link.platform}
		href={link.url}
		target="_blank"
		rel="noreferrer"
		title={link.name}
		aria-label={`${listenLabel} ${link.name}: ${title}`}
	>
		{#if link.platform}<span
				class="platform-logo"
				aria-hidden="true"
				style={`--platform-logo: url('/assets/platforms/${link.platform}.svg')`}
			></span>
		{:else}{link.name} ↗{/if}
	</a>
{/each}
