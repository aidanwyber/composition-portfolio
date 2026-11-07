<script lang="ts">
	const lines = Array.from({ length: 27 }, (_, i) =>
		Array.from({ length: 241 }, (_, j) => {
			const wave =
				Math.sin(j / 15 + i * 0.12) *
				Math.cos(j / 31 - i * 0.12) *
				Math.sin((Math.PI * j) / 240) ** 2;
			return `${j * 5},${215 + wave * (120 + i * 2.6)}`;
		}).join(' '),
	);
</script>

<svg
	class="sound-drawing"
	viewBox="0 0 1200 430"
	fill="none"
	aria-hidden="true"
>
	{#each lines as points}<polyline
			{points}
			stroke="currentColor"
			stroke-width="0.9"
			vector-effect="non-scaling-stroke"
		/>{/each}
</svg>
