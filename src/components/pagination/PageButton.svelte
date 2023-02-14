<script>
    export let number;
    import {goto} from '$app/navigation'

    export let direction;

    const getClass = () => {
        if (direction === "next") {
            return "next"
        } else if (direction === "prev") {
            return "prev"
        }
    }

    const goToPage = () => {
        goto(`/blog?page=${number}`)
    }
</script>


{#if direction === 'prev'}
    <button on:click={goToPage} class='prev'>
        <img src="/images/icons/pagination/single.svg" height="30"/>
    </button>
{:else if direction === 'next'}
    <button on:click={goToPage} class='next'>
        <img src="/images/icons/pagination/single.svg" height="30"/>
    </button>
    {:else if direction === 'first'}
    <button on:click={goToPage} class='first'>
        <img src="/images/icons/pagination/onestep.svg" height="30"/>
    </button>
    {:else}
    <button on:click={goToPage} class='last'>
        <img src="/images/icons/pagination/onestep.svg" height="30"/>
    </button>
    {/if}

    <style lang="scss">
      button {
        all: unset;
        background-color: transparent;
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
        transition: all 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          scale:1.05;
        }


      }

      .prev {
        position: absolute;
        left: 50%;
        transform: translateX(calc(-50% - 50px));
      }

      .first {
        position: absolute;
        left: 50%;
        transform: translateX(calc(-50% - 100px));
      }

      .next {
        position: absolute;
        left: 50%;
        transform: translateX(calc(-50% + 50px));
        img {
          transform: rotate(180deg);
        }
      }

      .last {
        position: absolute;
        left: 50%;
        transform: translateX(calc(-50% + 100px));
        img {
          transform: rotate(180deg);
        }
      }

    </style>
