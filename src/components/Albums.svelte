<script lang="ts">
	import type { Copy, Language } from '#locales';
	import { workList, workPath } from '#lib/catalog';
	import Image from '#components/Image';
	import ListeningLinks from '#components/ListeningLinks';
	import SpotifyPlayer from '#components/SpotifyPlayer';
	let { copy, lang }: { copy: Copy; lang: Language } = $props();
	const albums = $derived(
		workList(lang).filter(work => work.kind === 'album'),
	);
</script>

<section class="releases" id="releases" aria-labelledby="releases-heading">
	<div class="section-caption">
		<h2 id="releases-heading">{copy.releases.title}</h2>
		<span>{copy.releases.metadata}</span>
	</div>
	<div class="albums">
		{#each albums as album}
			<article
				class="album"
				id={album.slug}
				aria-labelledby={`${album.slug}-title`}
			>
				<a
					class="album-artwork"
					href={workPath(lang, album.slug)}
					aria-label={`${copy.detail.read}: ${album.title}`}
					><Image
						file={album.image}
						alt={`${copy.releases.artwork}: ${album.title}`}
						className="album-cover"
						square
					/></a
				>
				<div class="album-info">
					<div class="album-heading">
						<h3 id={`${album.slug}-title`}>
							<a href={workPath(lang, album.slug)}
								>{album.title}</a
							>
						</h3>
						<span>{album.year}</span>
					</div>
					<p class="album-genres">{album.genres}</p>
					<p class="album-description">{album.description}</p>
					<div class="album-links">
						<ListeningLinks
							links={album.links}
							title={album.title}
							listenLabel={copy.releases.listen}
						/>
					</div>
					<SpotifyPlayer
						url={album.links.find(
							link => link.platform === 'spotify',
						)?.url}
						title={album.title}
						{copy}
					/>
					{#if album.tracks}<details class="album-details">
							<summary>{copy.releases.tracks}</summary>
							<ol>
								{#each album.tracks as track}<li>
										{track}
									</li>{/each}
							</ol>
						</details>{/if}
					{#if album.details.length}<details class="album-details">
							<summary>{copy.releases.details}</summary>
							<div>
								{#each album.details as paragraph}<p>
										{paragraph}
									</p>{/each}
							</div>
						</details>{/if}
				</div>
			</article>
		{/each}
	</div>
</section>
