<script>
    import {fade} from 'svelte/transition';
    import {spring, tweened} from "svelte/motion";
    import {cubicOut, bounceInOut, linear} from "svelte/easing";
    import {innerWidth} from "$lib/stores";

    let width;
    $: width = innerWidth;
    export let prof;
    export let direction;


    const toX = tweened(0, {
        duration: 200,
        easing: cubicOut
    });

    const panel = spring(80, {
        stiffness: 0.1,
        damping: 0.35
    });

    const mouseEnter = () => {
        toX.set(-50)
        panel.set(20);
    }

    const mouseLeave = () => {
        toX.set(0)
        panel.set(80);
    }



</script>


<div class="card-container" in:fade>
    <div class="card" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>

        <div class="up" style="background-color: {prof.color};">

            <div class="name-container">
                {prof.name}
            </div>
        </div>
        <div class="down">
            <div class="text">
                Content: {prof.content}
            </div>
            {#if $width > 600 }
                <div class="image-container">
                    <img alt="proficiency logo" class="main-image" src={prof.img}/>
                </div>
            {/if}
        </div>
    </div>

</div>


<style lang="scss">


  .card-container {
    position: relative;
    width: 100%;

  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .main-image {
    height: 100px;
    width: 100px;
    filter: drop-shadow(3px 5px 2px rgba(130, 160, 195, 0.4));


  }

  .card {
    border-radius: 10px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    flex-direction: column;

    //transition: all 0.2s ease-in-out;

  }


  .down {
    color: white;
    background-color: #0D1821;
    padding: 20px;
  }

  .name-container {
    font-weight: bold;
    color: white;
    display: flex;
    font-size: 1.2em;
    justify-content: center;
    align-items: baseline;
  }


  .text {


    font-size: 1.05em;
    padding-bottom: 40px;
    //transition: all 0.2s ease-in-out;


  }

  .up {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .card-container:nth-child(odd) {
    .up {
      border-radius: 10px 10px 0 0;
    }
  }


</style>
