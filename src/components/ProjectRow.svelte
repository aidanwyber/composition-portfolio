<script lang="ts">
	import type { Project } from '#data/projects';
	import type { Copy, Language } from '#locales';
	import { media, externalLink } from '#lib/media';
	import { workPath } from '#lib/catalog';
	import Audio from '#components/Audio';
	import Image from '#components/Image';
	import Video from '#components/Video';
	let {
		project,
		copy,
		lang,
	}: { project: Project; copy: Copy; lang: Language } = $props();
	const text = $derived(copy.projects[project.id]);
	const score = $derived(media(project.score) || externalLink(project.score));
	const link = $derived(externalLink(project.externalUrl));
</script>

<article class="project" aria-labelledby={`project-${project.id}`}>
	<div class="project-info">
		<h3 id={`project-${project.id}`}>{text.title}</h3>
		<p>
			{text.category}{#if project.sample}<span class="sample-label">
					/ {copy.work.sample}</span
				>{/if}
		</p>
	</div>
	{#if project.year}<span class="project-year">{project.year}</span>{/if}
	<div class="project-audio">
		<Audio
			file={project.audio}
			label={`${copy.media.listen} ${text.title}`}
			forthcoming={copy.media.recording}
		/>
	</div>
	<details
		class="project-details"
		ontoggle={event => {
			if (!event.currentTarget.open)
				event.currentTarget
					.querySelectorAll<HTMLMediaElement>('video')
					.forEach(element => element.pause());
		}}
	>
		<summary>{copy.work.details}</summary>
		<div class="project-detail-body">
			<div>
				<p>{text.description}</p>
				<p class="project-kind">{copy.work[project.kind]}</p>
				<dl class="project-credits">
					<dt>{copy.work.role}</dt>
					<dd>{text.role}</dd>
					{#if text.instrumentation}<dt>
							{copy.work.instrumentation}
						</dt>
						<dd>{text.instrumentation}</dd>{/if}
				</dl>
				<div class="project-links">
					{#if score}<a href={score} target="_blank" rel="noreferrer"
							>{copy.work.score} ↗</a
						>{/if}{#if link}<a
							href={link}
							target="_blank"
							rel="noreferrer">{copy.work.project} ↗</a
						>{/if}{#if project.slug && !project.sample}<a
							href={workPath(lang, project.slug)}
							>{copy.detail.read} ↗</a
						>{/if}
				</div>
			</div>
			<Image
				file={project.image}
				alt={text.imageAlt || `${text.title} — ${copy.media.still}`}
				className="project-image"
			/>
			{#if project.video}<Video
					file={project.video}
					poster={project.videoPoster}
					label={`${text.title} — ${copy.media.videoLabel}`}
					unsupported={copy.media.unsupported}
					>{#snippet fallback()}<p class="media-status">
							{copy.media.video}
						</p>{/snippet}</Video
				>{/if}
		</div>
	</details>
</article>
