<script lang="ts">
	import Shell from '#components/Shell';
	import Seo from '#components/Seo';
	import Showreel from '#components/Showreel';
	import ProjectRow from '#components/ProjectRow';
	import Albums from '#components/Albums';
	import Image from '#components/Image';
	import { projects } from '#data/projects';
	import { site } from '#data/site';
	import { profiles, profileNames } from '#data/profiles';
	import { externalLink } from '#lib/media';
	let { data } = $props();
	const copy = $derived(data.copy);
	const socials = Object.entries(profiles).flatMap(([name, value]) => {
		const url = externalLink(value);
		return url ?
				[{ name: profileNames[name as keyof typeof profiles], url }]
			:	[];
	});
</script>

<Seo lang={data.lang} />
<Shell lang={data.lang} {copy}>
	<main id="main" tabindex="-1">
		<section class="hero container" aria-labelledby="hero-title">
			<p class="eyebrow">{copy.hero.profession}</p>
			<h1 id="hero-title">
				{copy.hero.headline[0]}<br />{copy.hero.headline[1]}
			</h1>
			<div class="hero-bottom">
				<div>
					<p>
						{copy.hero.supporting[0]}<br />{copy.hero.supporting[1]}
					</p>
					<p class="availability">{copy.hero.availability}</p>
				</div>
				<a class="text-link" href="#showreel"
					>{copy.hero.explore} <span aria-hidden="true">↓</span></a
				>
			</div>
		</section>
		<div class="container">
			<Showreel {copy} />
			<section class="work" id="work" aria-labelledby="work-heading">
				<div class="section-caption">
					<h2 id="work-heading">{copy.work.title}</h2>
					{#if projects.every(project => project.sample)}<span
							>{copy.work.samples}</span
						>{/if}
				</div>
				<div class="projects">
					{#each projects as project}<ProjectRow
							{project}
							{copy}
							lang={data.lang}
						/>{/each}
				</div>
			</section>
			<Albums {copy} lang={data.lang} />
			<section class="about" id="about" aria-labelledby="about-heading">
				<h2 class="eyebrow" id="about-heading">{copy.about.title}</h2>
				<div>
					<p class="about-lead">{copy.about.heading}</p>
					<p class="about-copy">{copy.about.biography}</p>
					<Image
						file={site.portrait}
						alt={copy.about.portrait}
						className="portrait"
					/>
				</div>
			</section>
		</div>
		<section class="contact" id="contact" aria-labelledby="contact-heading">
			<div class="container">
				<h2 class="eyebrow" id="contact-heading">
					{copy.contact.title}
				</h2>
				<a class="contact-link" href={`mailto:${site.email}`}
					>{copy.contact.headline[0]}<br />{copy.contact.headline[1]}
					<span aria-hidden="true">↗</span></a
				><a class="email" href={`mailto:${site.email}`}>{site.email}</a>
				<p class="contact-note">{copy.contact.supporting}</p>
				{#if socials.length}<nav
						class="social-links"
						aria-label={copy.contact.socials}
					>
						{#each socials as social}<a
								href={social.url}
								target="_blank"
								rel="noreferrer">{social.name} ↗</a
							>{/each}
					</nav>{/if}
			</div>
		</section>
	</main>
</Shell>
