<script lang="ts">
	import Shell from '#components/Shell';
	import Seo from '#components/Seo';
	import Scores from '#components/Scores';
	import { workList } from '#lib/catalog';
	import WorkCollection from '#components/WorkCollection';
	import Albums from '#components/Albums';
	import Image from '#components/Image';
	import { site } from '#data/site';
	import { media } from '#lib/media';
	let { data } = $props();
	const copy = $derived(data.copy);
	const commissioned = $derived(workList(data.lang).filter(work => work.practice === 'commissioned'));
	let layout = $state<'list' | 'grid'>('grid');
</script>

<Seo lang={data.lang} />
<Shell lang={data.lang} {copy}>
	<main id="main" tabindex="-1">
		<section class="hero container" aria-labelledby="hero-title">
			<div class="hero-intro">
				<h1 id="hero-title">{copy.hero.headline.join(' ')}</h1>
				<p class="hero-context">{copy.hero.supporting.join(' ')}</p>
				<div class="hero-actions">
					{#if commissioned.length}
						<a class="text-link" href="#commissions">{copy.catalogue.commissioned} <span aria-hidden="true">↓</span></a>
						<a class="text-link" href="#independent">{copy.catalogue.independent} <span aria-hidden="true">↓</span></a>
					{:else}
						<a class="text-link" href="#releases">{copy.releases.title} <span aria-hidden="true">↓</span></a>
						<a class="text-link" href="#scores">{copy.scores.title} <span aria-hidden="true">↓</span></a>
					{/if}
				</div>
			</div>
		</section>
		<div class="container catalogue" id="work" data-layout={layout}>
			{#if commissioned.length}
				<section class="practice-section" id="commissions" aria-labelledby="commissions-heading">
					<h2 class="practice-heading" id="commissions-heading">{copy.catalogue.commissioned}</h2>
					<WorkCollection works={commissioned} {copy} lang={data.lang} headingLevel={3} />
				</section>
			{/if}
			<section class="practice-section" id="independent" aria-labelledby="independent-heading">
				<div class="practice-header">
					<h2 class="practice-heading" id="independent-heading">{copy.catalogue.independent}</h2>
					<div class="layout-switch" role="group" aria-label={copy.catalogue.layout}>
						<button type="button" aria-pressed={layout === 'list'} onclick={() => layout = 'list'}>{copy.catalogue.list}</button>
						<button type="button" aria-pressed={layout === 'grid'} onclick={() => layout = 'grid'}>{copy.catalogue.grid}</button>
					</div>
				</div>
				<Albums {copy} lang={data.lang} />
				<Scores {copy} lang={data.lang} />
			</section>
			<section class="about" id="about" aria-labelledby="about-heading">
				<h2 class="eyebrow" id="about-heading">{copy.about.title}</h2>
				<div class="about-content">
					{#if media(site.portrait)}
						<div class="portrait">
							<Image
								file={site.portrait}
								alt={copy.about.portrait}
								className="portrait-image"
								width={3024}
								height={3024}
							/>
						</div>
					{/if}
					<div>
						<p class="about-lead">{copy.about.heading}</p>
						<p class="about-copy">{copy.about.biography}</p>
					</div>
				</div>
			</section>
		</div>
	</main>
</Shell>
