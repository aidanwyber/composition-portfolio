<script lang="ts">
	import { page } from '$app/state';
	import { locales } from '#locales';
	const lang = $derived(page.url.pathname.startsWith('/en') ? 'en' : 'nl');
	const copy = $derived(locales[lang]);
</script>

<svelte:head
	><title>{page.status} — Aidan Wyber</title><meta
		name="robots"
		content="noindex, follow"
	/></svelte:head
>
<main class="container work-detail">
	<p>{page.status}</p>
	<h1>{copy.detail.notFound}</h1>
	<p>{copy.detail.missing}</p>
	<p><a href={`/${lang}/`}>{copy.detail.back}</a></p>
</main>
