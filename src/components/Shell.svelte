<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Copy, Language } from '#locales';
	import { workPath } from '#lib/catalog';
	import ContactFooter from '#components/ContactFooter';
	let {
		lang,
		copy,
		children,
		slug,
	}: { lang: Language; copy: Copy; children: Snippet; slug?: string } =
		$props();
	const home = $derived(`/${lang}/`);
	function switchLanguage(event: MouseEvent, target: Language) {
		const anchor = event.currentTarget as HTMLAnchorElement;
		anchor.href =
			(slug ? workPath(target, slug) : `/${target}/`) +
			window.location.search +
			window.location.hash;
	}
</script>

<a class="skip-link" href="#main">{copy.navigation.skip}</a>
<div class="page-surface">
<header class="header container" id="top">
	<a
		class="wordmark"
		href={slug ? home : '#top'}
		aria-label={copy.navigation.home}
		>Aidan Wyber</a
	>
	<div class="header-navigation">
		<nav aria-label={copy.navigation.label}>
			<a href={`${slug ? home : ''}#work`}>{copy.navigation.work}</a><a
				href={`${slug ? home : ''}#about`}>{copy.navigation.about}</a
			><a href={`${slug ? home : ''}#contact`}
				>{copy.navigation.contact} <span aria-hidden="true">↗</span></a
			>
		</nav>
		<div
			class="language-switcher"
			role="group"
			aria-label={copy.navigation.language}
		>
			{#each ['nl', 'en'] as target, index}
				{#if index > 0}<span
						class="language-divider"
						aria-hidden="true"
					>
						/
					</span>{/if}
				<a
					href={slug ?
						workPath(target as Language, slug)
					:	`/${target}/`}
					hreflang={target}
					lang={target}
					aria-current={target === lang ? 'page' : undefined}
					data-sveltekit-reload
					onclick={event => switchLanguage(event, target as Language)}
					>{target.toUpperCase()}</a
				>
			{/each}
		</div>
	</div>
</header>
{@render children()}
</div>
<ContactFooter {copy} {lang} />
