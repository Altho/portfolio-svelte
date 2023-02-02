<script lang="ts">
    import {supabase} from "../lib/client";
    import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import {swipe} from 'svelte-gestures';
    import Title from "./Title.svelte";
    import Project from "./Project.svelte";
    import {innerWidth} from "../lib/stores";

    type Proficiency = {
        id: number,
        name: string,
        content: string,
        url: string,
        image: string
    }

    let startIndex = 0;
    let endIndex;
    let storeLength;
    let isGoingLeft;

    let width;
    $: width = innerWidth;


    const itemAmount = () => {
        if ($width > 1200) {
            return 2;
        } else {
            return 1;
        }
    }


    const projects = [];
    const displayed = writable<Proficiency[]>([]);

    function prev() {
        isGoingLeft = false;

        if (storeLength < itemAmount()) return;

        if (endIndex === itemAmount()) {
            const ceiling = Math.ceil(storeLength / itemAmount()) * itemAmount()
            startIndex = ceiling - itemAmount();
            endIndex = ceiling;
            displayed.set(projects.slice(startIndex, endIndex));
        } else {
            startIndex -= itemAmount();
            endIndex -= itemAmount();
            displayed.set(projects.slice(startIndex, endIndex));
        }
    }

    function next() {
        isGoingLeft = true;

        if (storeLength < itemAmount()) return;
        console.log(startIndex, endIndex, storeLength)
        startIndex = (startIndex + itemAmount());
        endIndex = (endIndex + itemAmount());
        displayed.set(projects.slice(startIndex, endIndex));
        console.log(startIndex, endIndex, storeLength)

        if (endIndex > storeLength) {
            startIndex = 0;
            endIndex = itemAmount();
            displayed.set(projects.slice(startIndex, endIndex));

        }


    }

    onMount(async () => {
        endIndex = itemAmount();
        const {data} = await supabase.from("projects").select("id, name, content, image, url").order('id');
        projects.push(...(data as Proficiency[]));
        storeLength = projects.length;
        displayed.set(projects.slice(startIndex, endIndex));
        for (let proj of projects) {
            proj.technologies = []
            const technos = await supabase.from("projtechs").select("techno_id").eq('project_id', proj.id)
            for (const tech of technos.data) {
                const usedTech = await supabase.from("technologies").select("id, name, logo").eq('id', tech.techno_id);
                proj.technologies.push(...usedTech.data)
                console.log(proj)
            }
        }
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
            {#if $width > 1200}
            <button class="left" on:click={prev}><img width="50" src="/images/arrow.svg"></button>

            {#each $displayed as proj (proj.id)}
                <Project direction={isGoingLeft} projects={proj}/>
            {/each}
            <button class="right" on:click={next}><img class="arrow-right" width="50" src="/images/arrow.svg"></button>
            {:else}

                <div class=mobile-buttons><button class="left" on:click={prev}><img width="50" src="/images/arrow.svg"></button>
                    <button class="right" on:click={next}><img class="arrow-right" width="50" src="/images/arrow.svg"></button></div>


                {#each $displayed as proj (proj.id)}
                    <Project direction={isGoingLeft} projects={proj}/>
                {/each}
                {/if}

        </div>
    </div>

</section>


<style lang="scss">

  section {
    height: 100vh;
  }

  .container {
    width: 100%;
    position: absolute;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    left: 50%;
    transform: translateX(-50%);
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
      right: 0;
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

  .mobile-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
  }

  @media (max-width: 900px) {

    .container {
     width:90%;
    }

    .frame {
      button {
        position: relative;
      }
    }


  }

</style>


