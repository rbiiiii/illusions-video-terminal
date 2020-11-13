<script>
	import Video from "./Video.svelte"
	
	export let videosList
	export let closeVideo
	export let isPlaying
</script>

<div data-playerstate="{isPlaying ? 'playing' : 'paused'}">
	{#each videosList as videoItem, index}
		<Video
			source="{videoItem.source}"
			id="{index}"
			{closeVideo}
		/>
	{/each}
</div>

<style>
	div {
		display:flex;
		justify-content: center;
		align-items:center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		opacity:0;
		background: black;
		transition:opacity 250ms ease-out;
	}
	div[data-playerstate="playing"] {
		opacity:1;
	}
</style>