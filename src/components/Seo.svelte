<script lang="ts">
	import { metadata } from '#lib/seo';
	import { site } from '#data/site';
	import { externalLink } from '#lib/media';
	import type { Work } from '#lib/catalog';
	import type { Language } from '#locales';
	let { lang, work }: { lang: Language; work?: Work } = $props();
	const meta = $derived(metadata(lang, work));
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={meta.canonical} />
	{#each meta.alternates as alternate}<link
			rel="alternate"
			hreflang={alternate.lang}
			href={alternate.url}
		/>{/each}
	<link rel="alternate" hreflang="x-default" href={meta.alternates[0].url} />
	<meta
		property="og:type"
		content={work?.kind === 'album' ? 'music.album' : 'website'}
	/>
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={meta.canonical} />
	<meta property="og:locale" content={lang === 'nl' ? 'nl_NL' : 'en_GB'} />
	<meta
		property="og:locale:alternate"
		content={lang === 'nl' ? 'en_GB' : 'nl_NL'}
	/>
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:alt" content={meta.imageAlt} />
	{#if !work || work.kind === 'album'}
		<meta property="og:image:width" content={work ? '800' : '1200'} />
		<meta property="og:image:height" content={work ? '800' : '630'} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={meta.image} />
	<meta name="twitter:image:alt" content={meta.imageAlt} />
	{#if site.verification.google}<meta
			name="google-site-verification"
			content={site.verification.google}
		/>{/if}
	{#if site.verification.bing}<meta
			name="msvalidate.01"
			content={site.verification.bing}
		/>{/if}
	{@html `<script type="application/ld+json">${meta.jsonLd}</script>`}
	{#if site.analytics.enabled && !site.analytics.consentRequired && externalLink(site.analytics.scriptUrl)}
		<script
			defer
			src={site.analytics.scriptUrl}
			data-domain={site.analytics.domain}
		></script>
	{/if}
</svelte:head>
