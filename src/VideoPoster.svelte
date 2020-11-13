<script>
    export let source
    export let title
    export let id
    export let currentVidID
</script>

<article data-id="{id}" data-selected={id === currentVidID ? 'true' : 'false'}>
    <div class="poster-wrapper">
        <img src="./videos/{source}.jpg" alt="">
    </div>
    <h2>{title} - {id}</h2>
</article>

<style>
	article {
        display: block;
        width: 100%;
        line-height: 1;
        transition:all 150ms ease-out;
        transform-origin: center;
        text-decoration: none;
    }
    article[data-selected="true"] {
        outline:0;
        transform:scale(1.05);
    }
    .poster-wrapper {
        position: relative;
    }
    article[data-selected="true"] .poster-wrapper {
        box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.5); 
    }
    article[data-selected="true"] .poster-wrapper::after {
        content:'▶️';
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        display:flex;
        align-items:center;
        justify-content: center;
        background-color:rgba(0,0,0,0.5);
        border:5px solid white;
        color:white;
        font-size:24px;
    }
    img {
        display:block;
        width: 100%;
        height:auto;
    }
    h2 {
        text-align: center;
        color:black;
        font-weight: normal;
    }
</style>