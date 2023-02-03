<script lang="ts">



  export let projects
  import {fly, fade} from 'svelte/transition';
  import {supabase} from "$lib/client.ts";
  import {writable} from "svelte/store";
  import {spring} from "svelte/motion";
  import {cubicOut, bounceInOut} from "svelte/easing";
  export let direction;

  console.log(projects)


  const y = spring(95, {
      stiffness: 0.1,
      damping: 0.35
  });


  const mouseEnter = () => {
      y.set(5);
  }

  const mouseLeaves = () => {
      y.set(95);
  }

  const getDirection = () => {
      if (direction ) {
          return -600
      } else {
          return 600
      }
  }

</script>


<div
        class="card"
        in:fade
        on:mouseenter={mouseEnter}
        on:mouseleave={mouseLeaves}
        >
    <div class="superior" style="height:{$y}%; background-image: url({projects.image})" >


    </div>
    <div class="text" >
        <p>{projects.content}</p>
    </div>
    {#if projects.technologies}

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
    transition: all 0.1s ease-in-out;



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

  .card:nth-child(odd) {
    .name {
      right:0;
    }

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
    z-index: 0;
    bottom:80px;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    overflow-x: scroll;
    max-height: 500px;
    color: white;
    background: fixed;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &::after {
      position: absolute;
      background-attachment: fixed;
      bottom: 0;
      height: 100%;
      width: 100%;
      content: "";
      background: linear-gradient(to top,
              rgb(13, 24, 33) 20%,
              rgba(255,255,255, 0) 80%
      ) ;

      pointer-events: none; /* so the text is still selectable */
    }

  }



  .superior {
    clip-path: polygon(0% 0%, 100% 0%, 100%  64%, 0  80%);
    position: relative;
    z-index: 1;
    border-radius: 10px;
    background-position: top;
    background-size: cover;
    height: 100%;



  }

  .card:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: 0.2s all ease-in-out;
    .text {
      top: 20px;
    }
    .text:after {
      background: linear-gradient(to top,
              rgba(13, 24, 33, 0.08) 20%,
              rgba(13, 24, 33, 0.24) 80%
      );
    }
    .superior {
      clip-path: none;
      border-radius: 10px 10px 0 0 ;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
      border-bottom: 3px solid #344966;
      background-color: #344966;
      opacity: 0.6;
    }
  }




  .card:nth-child(odd):hover {
    .name {
      transform: translateX(30px);
    }
  }

  .card:nth-child(even):hover {
    .name {
      transform: translateX(-30px);
    }
  }

  @media (max-width: 900px) {

    .card {
      height:450px;
    }




  }
</style>
