<script lang="ts">
	import Shell from '#components/Shell';
	import Seo from '#components/Seo';
	import Image from '#components/Image';
	import Audio from '#components/Audio';
	import ScoreDemo from '#components/ScoreDemo';
	import Video from '#components/Video';
	import ListeningLinks from '#components/ListeningLinks';
	import SpotifyPlayer from '#components/SpotifyPlayer';
	import { media, externalLink } from '#lib/media';
	import WorkMetadata from '#components/WorkMetadata';
	let { data } = $props();
	const copy = $derived(data.copy);
	const work = $derived(data.work);
	const score = $derived(media(work.score) || externalLink(work.score));
</script>

<Seo lang={data.lang} {work} />
<Shell lang={data.lang} {copy} slug={work.slug}>
	<main id="main" class="container work-detail" tabindex="-1">
		<a
			class="detail-back"
			href={`/${data.lang}/#${work.score ? 'scores' : 'releases'}`}
			>← {copy.detail.back}</a
		>
		<h1>{work.title}</h1>
		<WorkMetadata {work} {copy} />
		<div class="detail-layout">
			{#if work.image}<div class="detail-artwork">
					<Image
						file={work.image}
						alt={`${work.score ? copy.scores.preview : work.kind === 'album' ? copy.releases.artwork : copy.media.still}: ${work.title}`}
						className={work.kind === 'album' ?
							'album-cover'
						:	work.score ? 'score-page' : 'detail-image'}
						eager
						square={work.kind === 'album'}
						width={work.score ? 595 : 640}
						height={work.score ? 842 : 400}
					/>
				</div>{/if}
			<div class="detail-prose">
				<p>{work.description}</p>
				{#each work.details as paragraph}<p>{paragraph}</p>{/each}
				<div class="album-links">
					<ListeningLinks
						links={work.links}
						title={work.title}
						listenLabel={copy.releases.listen}
					/>{#if score}<a class="score-button" href={score} target="_blank" rel="noopener noreferrer" aria-label={`${copy.work.score}: ${work.title} — ${copy.scores.newTab}`}>{copy.work.score} <span aria-hidden="true">↗</span></a>{/if}
				</div>
				<SpotifyPlayer
					url={work.links.find(link => link.platform === 'spotify')
						?.url}
					title={work.title}
					{copy}
				/>
				{#if work.audio && work.score}
					<ScoreDemo file={work.audio} title={work.title} {copy} />
				{:else if work.audio}<div
						class="detail-audio"
					>
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
		</div>
	</main>
</Shell>
