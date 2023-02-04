<script lang="ts">
    import {supabase} from "../lib/client";
    import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import Card from "./Card.svelte";
    import {swipe} from 'svelte-gestures';
    import Title from "./Title.svelte";
    import {innerWidth} from "../lib/stores";

    type Proficiency = {
        id: number,
        name: string,
        content: string,
        color: string,
        img: string
    }

    let startIndex = 0;
    let endIndex = 4;
    let storeLength;
    let isGoingLeft = false;

    let width;
    $: width = innerWidth;


    const proficienciesStore = writable<Proficiency[]>([]);
    const proficiencies = [];
    const displayed = writable<Proficiency[]>([])


    function prev() {
        console.log(isGoingLeft)
        if (storeLength < 4) return;
        isGoingLeft = true;

        if (endIndex === 4) {
            const ceiling = Math.ceil(storeLength / 4) * 4
            startIndex = ceiling - 4;
            endIndex = ceiling;
            displayed.set(proficiencies.slice(startIndex, endIndex));
        } else {
            startIndex -= 4;
            endIndex -= 4;
            displayed.set(proficiencies.slice(startIndex, endIndex));
        }
        console.log(isGoingLeft)

    }

    function next() {
        console.log(isGoingLeft)

        isGoingLeft = false;
        if (storeLength < 4) return;
        startIndex = (startIndex + 4);
        endIndex = (endIndex + 4);
        displayed.set(proficiencies.slice(startIndex, endIndex));
        if (endIndex > storeLength) {
            startIndex = 0;
            endIndex = 4;
            displayed.set(proficiencies.slice(startIndex, endIndex));

        }

        console.log(isGoingLeft)

    }

    onMount(async () => {
        const {data} = await supabase.from("proficiencies").select("id, name, content, img, color").order('id');
        proficiencies.push(...(data as Proficiency[]));
        storeLength = proficiencies.length;
        displayed.set(proficiencies.slice(startIndex, endIndex));


    });


</script>


<section>
    <Title>PROFICIENCIES</Title>
    <div class="frame">
        <div class="container">
            {#if $width > 1200}
                <button class="left" on:click={prev}><img width="50" src="/images/arrow.svg"></button>

                {#each $displayed as prof (prof.id)}
                    <Card direction={isGoingLeft} prof={prof}/>
                {/each}
                <button class="right" on:click={next}><img class="arrow-right" width="50" src="/images/arrow.svg">
                </button>
            {:else}
                <div class="mobile-buttons">
                    <button class="left" on:click={prev}><img width="50" src="/images/arrow.svg"></button>
                    <button class="right" on:click={next}><img class="arrow-right" width="50" src="/images/arrow.svg">
                    </button>
                </div>


                {#each $displayed as prof (prof.id)}
                    <Card direction={isGoingLeft} prof={prof}/>
                {/each}
            {/if}


        </div>
    </div>

</section>


<style lang="scss">
  section {
    //height: 100vh;
  }

  .container {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

  }

  .frame {
    display: flex;
    position: relative;
    justify-content: center;
    //height: 80vh;

    button {
     position: absolute;
      width: 50px;
      top: 50%;
        transform: translateY(-50%);

      cursor: pointer;
      background-color: transparent;
      border: none;

      img {
        transition: all 0.2s ease-in-out;
      }

    }

    button:hover {
      img {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
      }

      .arrow-right {
        transform: scale(1.2) rotate(180deg);
        transition: all 0.2s ease-in-out;
      }
    }

    .right {
      right: -30px;
    }

    .left {
      left: 0;
    }

  }

  .mobile-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
  }

  .arrow-right {
    transform: rotate(180deg);
  }

  .main {
    font-size: 3rem;
    font-weight: 700;
  }

  @media (max-width: 900px) {



    .frame {
      button {
        position: relative;
      }
    }


  }

</style>


