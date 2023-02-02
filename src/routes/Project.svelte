<script lang="ts">


  import {onMount} from "svelte";

  export let projects
  import {fly, fade} from 'svelte/transition';
  import {supabase} from "$lib/client.ts";
  import {writable} from "svelte/store";
  import {spring} from "svelte/motion";
  import {cubicOut, bounceInOut} from "svelte/easing";
  console.log(projects)


  const y = spring(90, {
      stiffness: 0.1,
      damping: 0.35
  });

  let isParagraphVisible = false;

  const mouseEnter = () => {
      y.set(50);
        isParagraphVisible = true;
  }

  const mouseLeaves = () => {
      y.set(90);
      isParagraphVisible = false;
  }

</script>


<div class="card" in:fly={{x:800, duration:400}} on:mouseenter={mouseEnter} on:mouseleave={mouseLeaves}>
    <div class="superior" style="height:{$y}%; background-image: url({projects.image})" >


    </div>
    {#if projects.technologies}
        {#if isParagraphVisible}
            <div class="text" transition:fly={{duration: 100}}>
                <p>{projects.content}</p>
            </div>
        {/if}
        <div class="tech-container">
            <div class="technologies">
                {#each projects.technologies as tech (tech.id)}
                    <img alt="tech logo" src={tech.logo}>
                {/each}
            </div>

        </div>
    {/if}
    <div class="name">
        {projects.name}
    </div>

</div>

<style lang="scss">
  .card {
    position: relative;
    width: 350px;
    height: 600px;
    border-radius: 10px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: #0D1821;

  }

  .name {
    position: absolute;
    text-transform: uppercase;
    top: 20px;
    height: 100%;
    font-weight: bold;
    font-size: 1.5em;
    z-index: -1;
    transition: all 0.2s ease-in-out;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .tech-container {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    width:100%;
    height: 100px;

    img {
      height: 70px;
      width: 70px;
      filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

    }

  }

  .technologies {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #1C3041;
    border-radius: 20px 20px 0 0;
    width: 70%;
    height: 100%;
    box-shadow: 0px -4px 6px 1px rgba(0,0,0,0.95)
  }

  .text {
    position: absolute;
    margin-top: -50px;
    padding: 20px;
    max-height: 200px;
    overflow-x: scroll;
    color: white;
  }



  .superior {
    clip-path: polygon(0% 0%, 100% 0%, 100%  64%, 0  80%);
    position: relative;
    border-radius: 10px;
    background-position: top;
    background-size: cover;
    height: 100%;
  }

  .card:hover {
    cursor: pointer;
  }


  .card:nth-child(odd):hover {
    .name {
      transform: translateX(360px);
    }
  }

  .card:nth-child(even):hover {
    .name {
      transform: translateX(-40px);
    }
  }
</style>
