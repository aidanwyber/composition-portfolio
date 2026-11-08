<script lang="ts">
	import type { Copy } from '#locales';
	import Audio from '#components/Audio';
	let { file, title, copy }: { file: string; title: string; copy: Copy } = $props();
</script>

<figure class="score-demo">
	<figcaption>{copy.scores.demo}</figcaption>
	<Audio
		{file}
		label={`${copy.scores.demo}: ${title}`}
		forthcoming={copy.media.recording}
		unavailable={copy.media.audioUnavailable}
	/>
</figure>
