<script lang="ts">
	import type { Copy } from '#locales';
	import Video from '#components/Video';
	let { copy }: { copy: Copy } = $props();
</script>

<section class="reel" aria-labelledby="reel-heading" id="showreel">
	<div class="section-caption">
		<h2 id="reel-heading">{copy.reel.title}</h2>
		<span>{copy.reel.metadata}</span>
	</div>
	<figure class="reel-figure">
		<Video
			file="showreel.mp4"
			poster="showreel-poster.jpg"
			label={copy.reel.caption}
			unsupported={copy.media.unsupported}
		>
			{#snippet fallback()}<div class="reel-placeholder">
					<span class="reel-corner">{copy.reel.corner}</span
					>
					<p class="reel-status">{copy.reel.forthcoming}</p>
					<span class="reel-corner reel-corner-bottom"
						>{copy.reel.tagline}</span
					>
				</div>{/snippet}
		</Video>
		<figcaption>{copy.reel.caption}</figcaption>
	</figure>
</section>
