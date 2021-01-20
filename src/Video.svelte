<script>
    export let source
    export let id
    export let currentVidTiming
    export let currentVidDuration
    export let closeVideo

    $: videoDuration = formatTime(currentVidDuration)
    $: videoTiming = formatTime(currentVidTiming)

    function formatTime(time) { 
        const mins = Math.floor((time % 3600) / 60)
        const secs = Math.floor(time % 60)
        let out = mins + ":" + (secs < 10 ? "0" : "")
        out += secs
        return out
    }
</script>

<div class="video-wrapper" data-id="{id}">
    <video 
        on:ended={closeVideo}
        preload="none">
        <source src="./videos/{source}.mp4" type="video/mp4">
    </video>
    <div class="timer">
        <div class="timer-numbers">
            <span>{videoTiming}</span>
            <span>/</span>
            <span>{videoDuration}</span>
        </div>
        <progress max="100" value="0">Progress</progress>
    </div>
</div>

<style>
.timer {
    position: absolute;
    bottom: 0;
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:22px;
    text-align: center;
}
.timer-numbers {
    position: absolute;
    line-height: 1;
    font-size: 14px;
    color:black;
    z-index:2;
}
progress {
    position:absolute;
    bottom:0;
    width:100%;
    height:22px;
    opacity:0.6;
}
/* Fallback stuff */
progress[value] {
  appearance: none;
  border: none;
  display: inline;
}

/* WebKit styles */
progress[value]::-webkit-progress-bar {
  background-color: whiteSmoke;
  border-radius: 0px;
}

progress[value]::-webkit-progress-value {
  background-image:linear-gradient(to right, var(--light-orange), var(--light-orange));
  border-radius: 0px;
  transition: width 1s linear;
}

/* Firefox styles */
progress[value]::-moz-progress-bar {
  background-image:linear-gradient(to right, var(--light-orange), var(--light-orange));
  border-radius: 0px;
  transition: width 1s linear;
}
</style>