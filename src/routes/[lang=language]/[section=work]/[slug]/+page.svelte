<script lang="ts">
	import Shell from '#components/Shell';
	import Seo from '#components/Seo';
	import Image from '#components/Image';
	import Audio from '#components/Audio';
	import Video from '#components/Video';
	import ListeningLinks from '#components/ListeningLinks';
	import SpotifyPlayer from '#components/SpotifyPlayer';
	import { media, externalLink } from '#lib/media';
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
			href={`/${data.lang}/#${work.kind === 'album' ? 'releases' : 'work'}`}
			>← {copy.detail.back}</a
		>
		<h1>{work.title}</h1>
		<p class="detail-meta">
			{work.year || ''}{work.year ? ' / ' : ''}{work.genres}
		</p>
		<div class="detail-layout">
			{#if work.image}<div class="detail-artwork">
					<Image
						file={work.image}
						alt={`${work.kind === 'album' ? copy.releases.artwork : copy.media.still}: ${work.title}`}
						className={work.kind === 'album' ?
							'album-cover'
						:	'detail-image'}
						eager
						square={work.kind === 'album'}
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
					/>{#if score}<a href={score}>{copy.work.score} ↗</a>{/if}
				</div>
				<SpotifyPlayer
					url={work.links.find(link => link.platform === 'spotify')
						?.url}
					title={work.title}
					{copy}
				/>
				{#if work.audio || (!work.video && !work.links.some(link => link.platform === 'spotify'))}<div
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
