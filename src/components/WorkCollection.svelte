<script lang="ts">
	import type { Copy, Language } from '#locales';
	import { workPath, type Work } from '#lib/catalog';
	import { media, externalLink } from '#lib/media';
	import Image from '#components/Image';
	import ListeningLinks from '#components/ListeningLinks';
	import SpotifyPlayer from '#components/SpotifyPlayer';
	import Audio from '#components/Audio';
	import ScoreDemo from '#components/ScoreDemo';
	import Video from '#components/Video';
	import WorkMetadata from '#components/WorkMetadata';
	let {
		works,
		copy,
		lang,
		headingLevel = 4,
	}: {
		works: Work[];
		copy: Copy;
		lang: Language;
		headingLevel?: 3 | 4;
	} = $props();
</script>

<div class="work-collection">
	{#each works as work}
		<article
			class="work-entry"
			id={work.slug}
			aria-labelledby={`${work.slug}-title`}
		>
			{#if work.image}
				<a
					class="work-artwork"
					class:work-artwork-score={!!work.score}
					href={workPath(lang, work.slug)}
					aria-label={`${copy.detail.read}: ${work.title}`}
				>
					<Image
						file={work.image}
						alt={`${
							work.score ? copy.scores.preview
							: work.kind === 'album' ? copy.releases.artwork
							: copy.media.still
						}: ${work.title}`}
						className={work.score ? 'score-page' : 'album-cover'}
						square={!work.score}
						width={595}
						height={842}
					/>
				</a>
			{/if}
			<div class="work-info">
				<div class="work-heading">
					<svelte:element
						this={`h${headingLevel}`}
						id={`${work.slug}-title`}
						><a href={workPath(lang, work.slug)}
							>{#each work.title.split('_') as part, index}{#if index > 0}_<wbr
									/>{/if}{part}{/each}</a
						></svelte:element
					>
					{#if work.year}<span>{work.year}</span>{/if}
				</div>
				{#if work.score}
					<WorkMetadata {work} {copy} className="work-meta detail-meta" />
				{:else}
					<p class="work-meta">{work.genres}</p>
				{/if}
				<p class="work-description">{work.description}</p>
				{#if work.details.length}<details class="album-details">
						<summary>{copy.releases.details}</summary>
						<div>
							{#each work.details as paragraph}<p>
									{paragraph}
								</p>{/each}
						</div>
					</details>{/if}
				<div class="album-links">
					<ListeningLinks
						links={work.links}
						title={work.title}
						listenLabel={copy.releases.listen}
					/>
					{#if media(work.score) || externalLink(work.score)}
						<a
							class="score-button"
							href={media(work.score) || externalLink(work.score)}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${copy.work.score}: ${work.title} — ${copy.scores.newTab}`}
							>{copy.work.score}
							<span aria-hidden="true">↗</span></a
						>
					{/if}
				</div>
				<SpotifyPlayer
					url={work.links.find(link => link.platform === 'spotify')
						?.url}
					title={work.title}
					{copy}
				/>
				{#if work.audio && work.score}
					<ScoreDemo file={work.audio} title={work.title} {copy} />
				{:else if work.audio}<div class="detail-audio">
						<Audio
							file={work.audio}
							label={`${copy.media.listen} ${work.title}`}
							forthcoming={copy.media.recording}
						/>
					</div>{/if}
				{#if work.video}<Video
						file={work.video}
						label={`${work.title} — ${copy.media.videoLabel}`}
						unsupported={copy.media.unsupported}
						>{#snippet fallback()}<p>
								{copy.media.video}
							</p>{/snippet}</Video
					>{/if}
				{#if work.tracks}<details class="album-details">
						<summary>{copy.releases.tracks}</summary>
						<ol>
							{#each work.tracks as track}<li>{track}</li>{/each}
						</ol>
					</details>{/if}
			</div>
		</article>
	{/each}
</div>
