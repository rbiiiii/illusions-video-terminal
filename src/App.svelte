<script>
	import Videos from "./Videos.svelte"
	import VideosPosters from "./VideosPosters.svelte"

	export let videosList

	const body = document.body
	const maxVideosNumber = Object.keys(videosList).length - 1 
	const numberOfColumns = 4
	document.documentElement.style.setProperty('--numberOfColumns', numberOfColumns);

	let isFullscreen = false
	let isPlaying = false
	let currentVidID = 0
	let currentVidWrapper = null
	let currentVid = null
	let currentVidTiming = 0
	let currentVidDuration = 0
	let progress = null

	const openFullscreen = (dom) => {
		if (dom.requestFullscreen) {
			dom.requestFullscreen();
		} else if (dom.mozRequestFullScreen) { /* Firefox */
			dom.mozRequestFullScreen();
		} else if (dom.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			dom.webkitRequestFullscreen();
		} else if (dom.msRequestFullscreen) { /* IE/Edge */
			dom.msRequestFullscreen();
		}
		isFullscreen = true
	}

	let videoTimer = function() {
		let timer;
		function launchTimer() { 
			currentVidTiming += 1
			progress.value = currentVidTiming
		}
		return {
			start() {
				progress = document.querySelector(`.video-wrapper[data-id="${currentVidID}"] progress`)
				timer = window.setInterval(launchTimer, 1000)
				currentVid.onloadedmetadata = function() {
					currentVidDuration = Math.round(currentVid.duration)
					progress.max = currentVidDuration
				};
			},
			stop() {
				progress.value = 0
				clearInterval(timer)
			}
		}
	}

	let videoTimerClosure = videoTimer()

	const closeVideo = () => {
		currentVidWrapper.classList.remove('fullscreen')
		currentVid.pause()
		currentVid.currentTime = 0
		currentVidTiming = 0
		videoTimerClosure.stop()
		isPlaying = false
	}

	const openVideo = () => {
		currentVidWrapper = document.querySelector(`.video-wrapper[data-id="${currentVidID}"]`)
		currentVid = currentVidWrapper.querySelector('video')
		currentVidWrapper.classList.add('fullscreen')
		currentVid.play()
		isPlaying = true
		videoTimerClosure.start()
	}

	const navigationKey = (key) => {
		if (!isFullscreen) { openFullscreen(body) }
		switch (key) {
			// if 'B' is pressed
			case 66 :
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
		let currentPoster = document.querySelector(`article[data-id="${currentVidID}"]`)
		currentPoster.scrollIntoView({behavior:'smooth', block: "center", inline: "center"})
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
	{currentVidTiming}
	{currentVidDuration}
	{closeVideo}
	{isPlaying}	/>