<script>
    import {fade} from 'svelte/transition';
    import {inview} from 'svelte-inview';

    let isInView;

</script>

<section>
    <div class="container"
         use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
         on:change={({ detail }) => {
    isInView = detail.inView;
  }}
    >
        {#if isInView}
            <div class="content" transition:fade={{duration: 1000 }}>
                <p><slot /></p>

            </div>
        {/if}
    </div>
</section>

<style>
    .container {
        left: 50%;
        width: 100%;
        height: 100vh;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }



    p {
        font-size: 1.2em;
        line-height: 2.5em;
        text-align: justify;

    }

    @media (max-width: 900px) {

        .container {
            width:90%;

        }

        p {

            line-height: 1.5em;


        }
    }
</style>
