<script lang="ts">
  import {supabase} from "../lib/client";
  import {onMount} from "svelte";
  import {writable} from "svelte/store";
  import {swipe} from 'svelte-gestures';
  import Title from "./Title.svelte";
  import Project from "./Project.svelte";

  type Proficiency = {
    id: number,
    name: string,
    content: string,
    url: string,
    image: string
  }

  let startIndex = 0;
  let endIndex = 2;
  let storeLength;

  const projects = [];
  const displayed = writable<Proficiency[]>([]);


  function prev() {
    if (storeLength < 2) return;

    if (endIndex === 2) {
      const ceiling = Math.ceil(storeLength / 2) * 2
      startIndex = ceiling - 2;
      endIndex = ceiling;
      displayed.set(projects.slice(startIndex, endIndex));
    } else {
      startIndex -= 2;
      endIndex -= 2;
      displayed.set(projects.slice(startIndex, endIndex));
    }
  }

  function next() {

    if (storeLength < 2) return;
    console.log(startIndex, endIndex, storeLength)
    startIndex = (startIndex + 2);
    endIndex = (endIndex + 2);
    displayed.set(projects.slice(startIndex, endIndex));
    console.log(startIndex, endIndex, storeLength)

    if (endIndex > storeLength) {
      startIndex = 0;
      endIndex = 2;
      displayed.set(projects.slice(startIndex, endIndex));

    }


  }

  onMount(async () => {
    const {data} = await supabase.from("projects").select("id, name, content, image, url").order('id');
    projects.push(...(data as Proficiency[]));
    storeLength = projects.length;
    displayed.set(projects.slice(startIndex, endIndex));
  });


</script>

<section use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }} on:swipe={event => {
  if (event.detail.direction === 'left') {
    next();
  } else if (event.detail.direction === 'right') {
    prev();
  }
}}>
    <Title>PROJECTS</Title>
    <div class="frame">
        <div class="container">
            <button class="left" on:click={prev}><img width="50" src="/images/arrow.svg"></button>

            {#each $displayed as proj (proj.id)}
                <Project projects={proj} />
            {/each}
            <button class="right" on:click={next}><img class="arrow-right" width="50" src="/images/arrow.svg"></button>

        </div>
    </div>

</section>


<style lang="scss">
  .container {
    width: 100%;
    position: absolute;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .frame {
    display: flex;
    position: relative;
    height: 100vh;

    button {
      position: absolute;
      width: 50px;
      top: 50%;
      transform: translatey(-50%);
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
      right: -30px;
    }

    .left {
      left: 0;
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


