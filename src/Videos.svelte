<script>
	import Video from "./Video.svelte"
	
	export let videosList
	export let closeVideo
</script>

{#each videosList as videoItem, index}
	<Video
		source="{videoItem.source}"
		id="{index}"
		{closeVideo}
	/>
{/each}