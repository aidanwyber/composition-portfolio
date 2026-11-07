<script lang="ts">
	import type { Copy, Language } from '#locales';
	import { faqItems } from '#lib/faq';
	let { copy, lang }: { copy: Copy; lang: Language } = $props();
	const items = $derived(faqItems(lang));
</script>

<details class="footer-questions" id="faq">
	<summary>{copy.faq.title}</summary>
	<div class="faq-list">
		{#each items as item}
			<details class="faq-item" id={`faq-${item.id}`}>
				<summary>{item.question}</summary>
				<div class="faq-answer">
					<p>{item.answer}</p>
					<a class="faq-link" href={item.href}>{item.link} <span aria-hidden="true">↗</span></a>
				</div>
			</details>
		{/each}
	</div>
</details>
