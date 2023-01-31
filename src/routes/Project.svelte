<script lang="ts">


  import {onMount} from "svelte";

  export let projects
  import {fly} from 'svelte/transition';
  import {supabase} from "$lib/client.ts";
  import {writable} from "svelte/store";

  let technos;
  const technologies = []


  onMount(async () => {
    console.log(projects.id)
    const {data} = await supabase.from("projtechs").select("techno_id").eq('project_id', projects.id);
    console.log(data)
    for (const tech of data) {
      const {data} = await supabase.from("technologies").select("id, name, logo").eq('id', tech.techno_id);
      technologies.push(...data)
    }
    console.log(technologies)
  });
  $: technos = technologies;

</script>


<div class="card" in:fly={{x:600, duration:400}}>
    <div class="superior" style="background-image: url({projects.image})">
        {#each technos as tech }
            lknlknlknlk,mlk,ml,mlk,lk,lk,kl,
        {/each}

    </div>
    <div class="name">
        {projects.name}
    </div>

</div>

<style lang="scss">
  .card {
    height: 600px;
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

  .name::after {
    content: '';
    margin-left: 10px;
    border-bottom: 5px solid white;
    width: 100%;
  }

  .superior {
    clip-path: polygon(0% 0%, 100% 0%, 100% 64%, 0 80%);
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
