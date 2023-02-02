<script>
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';

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
              <p class="main">Hello, I am Altho</p>
              <p>I like to solve problems</p>
                </div>
        {/if}
    </div>
</section>

<style>
    .container {
        width: 100%;
        height: 100vh;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
    }
    .main {
        font-size: 3rem;
        font-weight: 700;
    }

    @media (max-width: 900px) {

        .container {
            width:90%;

        }


    }
</style>
