<script>
import Videos from "./Videos.svelte"

export let source
export let id
export let closeVideo

</script>

<video 
    data-id="{id}"
    on:ended={closeVideo}
    preload="none">
    <source src="./videos/{source}.mp4" type="video/mp4">
</video>