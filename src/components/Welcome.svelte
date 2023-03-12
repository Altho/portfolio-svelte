<script>
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;

    let y = 0;

</script>

<svelte:window bind:scrollY={y}/>

<section>
    <div class="container"
         use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
         on:change={({ detail }) => {
    isInView = detail.inView;
  }}
    >
        {#if isInView}
            <div class="content" transition:fade={{duration: 200 }}>
                <p class="main">Hello, I am Altho</p>
                <p class="sub">I like to solve problems</p>
            </div>
            <div transition:fade={{duration: 200 }}  class="avatar"><img style="top: {-y*0.6}px" src="/images/avatar.webp" alt="avatar" /></div>
        {/if}
    </div>
</section>

<style lang="scss">
    .container {
        width: 100%;
        height: 100vh;
        padding: 20px;
        display: flex;
        font-family: "Exo 2", sans-serif;

        justify-content: center;
        align-items: center;

      .avatar {
        img {
          height: 70vh;
          padding-left: 20px;
          
        }
      }

    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .main {
        font-size: 3rem;
        font-weight: 700;
    }

    @media (max-width: 900px) {

        .container {
            width:90%;

        }

        .avatar {
            img {
                margin-top: 35%;
                height: 70vh;
                position: absolute;
                left: 15%;
                z-index: -1;
            }
        }


    }
</style>

