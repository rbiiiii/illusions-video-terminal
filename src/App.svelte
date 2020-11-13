<script>
	import Videos from "./Videos.svelte"
	import VideosPosters from "./VideosPosters.svelte"

	export let videosList

	const maxVideosNumber = Object.keys(videosList).length - 1 
	const numberOfColumns = 4

	let isPlaying = false
	let currentVidID = 0
	let currentVid = document.querySelector(`video[data-id="${currentVidID}"]`)

	const closeVideo = () => {
		currentVid.pause()
		currentVid.classList.remove('fullscreen')
		currentVid.currentTime = 0
		isPlaying = false
	}

	const openVideo = () => {
		currentVid = document.querySelector(`video[data-id="${currentVidID}"]`)
		currentVid.classList.add('fullscreen')
		currentVid.play()
		isPlaying = true
	}

	const navigationKey = (key) => {
		switch (key) {
			// if 'up' is pressed
			case 38 :
				if (currentVidID >= numberOfColumns) {
					currentVidID -= numberOfColumns
				}
				break
			// if 'right' is pressed
			case 39 :
				if (currentVidID < maxVideosNumber) {
					currentVidID += 1
				}
				break
			// if 'down' is pressed
			case 40 :
				if ( currentVidID <= (maxVideosNumber - numberOfColumns) ) {
					currentVidID += numberOfColumns
				}
				break
			// if 'left' is pressed
			case 37 :
				if (currentVidID > 0) {
					currentVidID -= 1
				}
				break
			// if 'p' is pressed
			case 80 :
				openVideo()
				break
			default :
				return
		}
	}

	const handleKeydown = (e) => {
		let keyCode = e.keyCode
		if (isPlaying) {
			if (keyCode == 80) {
				closeVideo()
			} else {
				return
			}
		} else {
			navigationKey(keyCode)
		}
	}

</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
	<section>
		<VideosPosters 
			{videosList}
			{currentVidID} />
	</section>
</main>

<div data-playerstate="{isPlaying ? 'playing' : 'paused'}">
	<Videos
		{videosList}
		{closeVideo} />
</div>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: min-content;
		grid-gap: var(--su);
		align-items: center;
	}
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