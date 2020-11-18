<script>
    export let source
    export let id
    export let currentVidTiming
    export let currentVidDuration
    export let closeVideo

    function formatTime(time) {   
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    $: videoDuration = formatTime(currentVidDuration)
    $: videoTiming = formatTime(currentVidTiming)
</script>

<div class="video-wrapper" data-id="{id}">
    <video 
        on:ended={closeVideo}
        preload="none">
        <source src="./videos/{source}.mp4" type="video/mp4">
    </video>
    <p>
        <span class="current-time">{videoTiming}</span>
        <span class="separator">/</span>
        <span class="current-duration">{videoDuration}</span>
    </p>
</div>

<style>
p {
    position: absolute;
    bottom: 1em;
    background: var(--dark-orange);
    padding: 0.25em 0.5em;
    min-width: 5.5em;
    text-align: center;
    display:flex;
    justify-content: space-between;
}
span {
    margin:0 0.2em;
    flex:0 0 auto;
}
</style>