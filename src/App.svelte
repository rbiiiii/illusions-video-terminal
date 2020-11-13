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
			// if 'p' is pressed
			if (keyCode == 80) {
				closeVideo()
			} else { return }
		} else {
			navigationKey(keyCode)
		}
	}

</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
	<VideosPosters 
		{videosList}
		{currentVidID} />
</main>

<Videos
	{videosList}
	{closeVideo}
	{isPlaying}	/>