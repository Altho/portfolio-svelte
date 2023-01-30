<script>
    import {fade} from 'svelte/transition';
    import {tweened} from "svelte/motion";
    import {cubicOut} from "svelte/easing";
    export let prof;

    console.log(prof)

    const toX = tweened(0, {
        duration: 400,
        easing: cubicOut,
    });

</script>


<div class="card-container" transition:fade={{duration: 1000 }}>

    <div class="card" on:mouseenter={() => toX.set(-50)} on:mouseleave={() => toX.set(0)}>

        <div class="left-side">
            Content: {prof.content}
        </div>
        <div class="right-side" style="background-color: {prof.color};">
            {prof.name}

        </div>
    </div>
    <img alt="proficiency logo" class="main-image" style="{prof.id%2 !== 0 ? `top:50%;  transform: translate(${$toX-50}%, -50%);` : `top:50%; right:0;  transform: translate(${Math.abs($toX)+50}%, -50%);`}" src={prof.img}/>

</div>


<style lang="scss">


  .card-container {
    position: relative;
    width: 40%;

  }

  .main-image {
    height: 100px;
    position: absolute;
    z-index: -1;

  }

  .card {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;    transition: all 0.2s ease-in-out;
    display: flex;
  }

  .card:hover {
    cursor: pointer;
    scale:1.05;
    transition: all 0.2s ease-in-out;

  }

  .left-side {
    padding: 20px;
    background-color: white;
    width: 70%;
  }

  .right-side {
    padding: 20px;
    width: 30%;
    border-radius: 0 10px 10px 0;
  }

  @media (max-width: 900px) {
    .card-container {
      width:100%;
    }
    .card:hover {
      scale:1;

    }
  }
</style>
