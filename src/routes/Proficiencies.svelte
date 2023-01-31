<script lang="ts">
    import {supabase} from "../lib/client";
    import {onMount} from "svelte";
    import {inview} from 'svelte-inview';
    import {derived, writable} from "svelte/store";
    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';
    import Card from "./Card.svelte";
    import {swipe} from 'svelte-gestures';
    import {fly} from 'svelte/transition';

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

    const proficienciesStore = writable<Proficiency[]>([]);
    const proficiencies = [];
    const displayed = writable<Proficiency[]>([]);


    function prev() {
        if (storeLength < 4) return;

        if (endIndex === 4) {
            const ceiling = Math.ceil(storeLength / 4) * 4
            startIndex = ceiling - 4;
            endIndex = ceiling;
            displayed.set(proficiencies.slice(startIndex, endIndex));
        }
        else {
            startIndex -= 4;
            endIndex -= 4;
            displayed.set(proficiencies.slice(startIndex, endIndex));
        }
    }

    function next() {

        if (storeLength < 4) return;
        startIndex = (startIndex + 4);
        endIndex = (endIndex + 4);
        displayed.set(proficiencies.slice(startIndex, endIndex));
        if (startIndex > storeLength) {
            startIndex = 0;
            endIndex = 4;
            displayed.set(proficiencies.slice(startIndex, endIndex));

        }


    }

    onMount(async () => {
        const {data} = await supabase.from("proficiencies").select("id, name, content, img, color").order('id');
        proficiencies.push(...(data as Proficiency[]));
        storeLength = proficiencies.length;
        displayed.set(proficiencies.slice(startIndex, endIndex));
    });


</script>

<section on:swipe={event => {
  if (event.detail.direction === 'left') {
    next();
  } else if (event.detail.direction === 'right') {
    prev();
  }
}}>
    <div class="frame">
    <button on:click={prev}><img width="50" src="/images/arrow.svg"></button>

    <div class="container"

    >

        {#each $displayed as prof (prof.id)}
            <Card prof={prof}/>
        {/each}


    </div>
    <button class="right" on:click={next}><img class="arrow-right" width="50" src="/images/arrow.svg"></button>
    </div>

</section>


<style lang="scss">
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

    button {
      position:absolute;
      width:50px;
      top:50%;
      transform:translatey(-50%);
      margin-left: -50px;
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
      right:-30px;
    }

  }

  .arrow-right {
    transform: rotate(180deg);
  }

  .main {
    font-size: 3rem;
    font-weight: 700;
  }

</style>


