<script lang="ts">
	import { media } from '#lib/media';
	let {
		file,
		alt,
		className = '',
		eager = false,
		square = false,
	}: {
		file?: string;
		alt: string;
		className?: string;
		eager?: boolean;
		square?: boolean;
	} = $props();
	let failed = $state(false);
	const source = $derived(media(file));
</script>

{#if source && !failed}
	<picture>
		{#if file?.startsWith('albums/') && media(file.replace('.jpg', '.webp')) && media(file.replace('.jpg', '-400.webp'))}
			<source
				type="image/webp"
				srcset={`/assets/${file.replace('.jpg', '-400.webp')} 400w, /assets/${file.replace('.jpg', '.webp')} 800w`}
				sizes="(max-width:600px) calc(100vw - 40px), 300px"
			/>
		{/if}
		<img
			class={className}
			src={source}
			{alt}
			width={square ? 800 : 640}
			height={square ? 800 : 400}
			loading={eager ? 'eager' : 'lazy'}
			decoding="async"
			onerror={() => (failed = true)}
		/>
	</picture>
{/if}
