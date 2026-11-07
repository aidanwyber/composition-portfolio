<script lang="ts">
	import type { Copy } from '#locales';
	import type { Work } from '#lib/catalog';
	import { site } from '#data/site';
	let { work, copy, className = 'detail-meta' }: {
		work: Work; copy: Copy; className?: string;
	} = $props();
</script>

<p class={className}>
	<span class="detail-meta-group">{site.personName}<span aria-hidden="true">·</span></span>
	{#if !work.score && work.year}
		<span class="detail-meta-group"><time datetime={String(work.year)}>{work.year}</time><span aria-hidden="true">·</span></span>
	{/if}
	{#if work.score && work.scorePages}
		<span class="detail-meta-group">{work.genres}<span aria-hidden="true">·</span></span>
		<span>{work.scorePages} {copy.scores.pages}</span>
	{:else}
		<span>{work.genres}</span>
	{/if}
</p>
