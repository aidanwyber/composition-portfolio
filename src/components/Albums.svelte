<script lang="ts">
	import type { Copy, Language } from '#locales';
	import { workList } from '#lib/catalog';
	import WorkCollection from '#components/WorkCollection';
	let { copy, lang }: { copy: Copy; lang: Language } = $props();
	const works = $derived(workList(lang).filter(work => work.kind === 'album' && work.practice === 'independent'));
</script>

{#if works.length}
	<section class="catalogue-group" id="releases" aria-labelledby="releases-heading">
		<h3 class="catalogue-subheading" id="releases-heading">{copy.releases.title}</h3>
		<WorkCollection {works} {copy} {lang} />
	</section>
{/if}
