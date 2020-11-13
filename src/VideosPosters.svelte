<script>
	import VideoPoster from "./VideoPoster.svelte"

	export let videosList
	export let currentVidID
</script>

<section>
	{#each videosList as videoItem, index}
		<VideoPoster
			source="{videoItem.source}"
			title="{videoItem.title}"
			id="{index}"
			currentVidID="{currentVidID}"
		/>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: min-content;
		grid-gap: var(--su);
		align-items: center;
	}
</style>