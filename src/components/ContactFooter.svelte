<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { Copy, Language } from '#locales';
	import Questions from '#components/Questions';
	import { site } from '#data/site';
	import { profiles, profileNames } from '#data/profiles';
	import { externalLink } from '#lib/media';
	let { copy, lang }: { copy: Copy; lang: Language } = $props();
	let footer: HTMLElement | undefined = $state();
	let anchor: HTMLDivElement | undefined = $state();
	let canReveal = $state(false);
	const socials = Object.entries(profiles).flatMap(([name, value]) => {
		const url = externalLink(value);
		return url ? [{ name: profileNames[name as keyof typeof profiles], url }] : [];
	});
	onMount(() => {
		const element = footer;
		if (!element) return;
		// A footer taller than the viewport must stay in normal flow. Observe its
		// natural size so opening Q&A, font loading and resizing never clip content.
		const update = () => {
			canReveal = element.getBoundingClientRect().height <= window.innerHeight;
		};
		const observer = new ResizeObserver(update);
		observer.observe(element);
		window.addEventListener('resize', update);
		const revealQuestion = async (event: Event) => {
			update();
			const question = event.target;
			if (question instanceof HTMLDetailsElement && question.open) {
				await tick();
				question.querySelector('summary')?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
			}
		};
		element.addEventListener('toggle', revealQuestion, true);
		update();
		return () => {
			observer.disconnect();
			window.removeEventListener('resize', update);
			element.removeEventListener('toggle', revealQuestion, true);
		};
	});
	function revealFocusedControl(event: FocusEvent) {
		const target = event.target;
		if (canReveal && anchor && target instanceof HTMLElement &&
			target.getBoundingClientRect().top < anchor.getBoundingClientRect().top) {
			anchor.scrollIntoView({ block: 'start', behavior: 'instant' });
		}
	}
</script>

<!-- The contact destination stays in normal flow even when the footer is pinned. -->
<div class="contact-anchor" id="contact" tabindex="-1" bind:this={anchor}></div>
<footer class="contact-footer" class:footer-reveal={canReveal} bind:this={footer} onfocusin={revealFocusedControl} aria-labelledby="contact-heading">
	<div class="container">
		<p class="eyebrow">{copy.contact.title}</p>
		<h2 class="contact-heading" id="contact-heading">
			{#each copy.contact.headline as line}<span>{line}</span>{/each}
		</h2>
		<p class="contact-note">{#each copy.contact.supporting as sentence}<span>{sentence}</span>{/each}</p>
		<div class="contact-actions">
			<a class="contact-button" href={`mailto:${site.email}`}>
				{copy.contact.action} <span aria-hidden="true">↗</span>
			</a>
			<a class="email" href={`mailto:${site.email}`}>{site.email}</a>
		</div>
		{#if socials.length}
			<nav class="social-links" aria-label={copy.contact.socials}>
				{#each socials as social}
					<a href={social.url} target="_blank" rel="noreferrer">{social.name} ↗</a>
				{/each}
			</nav>
		{/if}
		<div class="footer-bottom">
			<Questions {copy} {lang} />
			<a class="footer-top-link" href="#top">{copy.footer.top} <span aria-hidden="true">↑</span></a>
		</div>
	</div>
</footer>
