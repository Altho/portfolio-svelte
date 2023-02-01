<script lang="ts">


  import {onMount} from "svelte";

  export let projects
  import {fly} from 'svelte/transition';
  import {supabase} from "$lib/client.ts";
  import {writable} from "svelte/store";
  console.log(projects)



</script>


<div class="card" in:fly={{x:600, duration:400}}>
    <div class="superior" style="background-image: url({projects.image})">


    </div>
    {#if projects.technologies}
        <div class="tech-container">
            {#each projects.technologies as tech (tech.id)}
                <img alt="tech logo" src={tech.logo}>
            {/each}
        </div>
    {/if}
    <div class="name">
        {projects.name}
    </div>

</div>

<style lang="scss">
  .card {
    height: 600px;
    position: relative;
    width: 350px;
    border-radius: 10px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: #eef2fb;

  }

  .name {
    position: absolute;
    text-transform: uppercase;
    top: 20px;
    height: 100%;
    font-weight: bold;
    z-index: -1;
    transition: all 0.2s ease-in-out;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .tech-container {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    bottom: 20px;
    width:100%;
    height: 70px;

    img {
      height: 70px;
      width: 70px;
      filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

    }

  }

  .name::after {
    content: '';
    margin-left: 10px;
    border-bottom: 5px solid white;
    width: 100%;
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
