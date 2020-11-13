<script>
	import VideoPoster from "./VideoPoster.svelte"

	export let videosList
	export let currentVidID
	
</script>

{#each videosList as videoItem, index}
	<VideoPoster
		source="{videoItem.source}"
		title="{videoItem.title}"
		id="{index}"
		currentVidID="{currentVidID}"
	/>
{/each}