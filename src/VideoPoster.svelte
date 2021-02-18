<script>
    export let source
    export let title
    export let id
    export let currentVidID
</script>

<article data-id="{id}" data-selected={id === currentVidID ? 'true' : 'false'} tabindex="0">
    <div class="poster-wrapper">
        <img src="./videos/{source}.png" alt="">
    </div>
    <h2>{title}</h2>
</article>

<style>
	article {
        position:relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        line-height: 1;
        transition:transform 150ms ease;
        transform-origin: center;
        text-decoration: none;
    }
    article[data-selected="true"] {
        outline:0;
        transform:scale(1.05);
    }
    .poster-wrapper {
        position: relative;
        box-shadow:0px 0px 15px -5px rgba(0,0,0,0.5);
    }
    .poster-wrapper::before {
        content:'';
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.5); 
        opacity:0;
        transition:opacity 150ms ease;
    }
    article[data-selected="true"] .poster-wrapper {
        opacity:1;
    }
    article[data-selected="true"] .poster-wrapper::after {
        content:'▶';
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        display:flex;
        align-items:center;
        justify-content: center;
        background-color:rgba(var(--light-orange-rgb),0.25);
        border:5px solid white;
        color:white;
        font-size:56px;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.5); 
    }
    article[data-selected="true"] img {
        filter: grayscale(100%);
    }
    img {
        display:block;
        width: 100%;
        height:auto;
    }
    h2 {
        display: inline-block;
        padding: 0.5em;
        border: 2px solid;
        border-radius: 50%;
        line-height: 0.8;
        letter-spacing: 1px;
        font-family:rift;
        text-align: center;
        font-weight: normal;
    }
</style>