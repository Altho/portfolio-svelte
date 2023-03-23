<script>
    import {fade} from 'svelte/transition';
    import {spring, tweened} from "svelte/motion";
    import {cubicOut, bounceInOut, linear} from "svelte/easing";

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

    const getDirection = () => {
        if (direction ) {
            return 600
        } else {
            return -600
        }
    }


</script>


<div class="card-container" in:fade >
    <div class="card"  on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
        <div class="left-side">
            <div class="text">
                {prof.content}
            </div>
        </div>
        <div class="right-side" style="background-color: {prof.color}; width:{$panel}%">
            <div class="name-container">
                {prof.name}
            </div>

        </div>
    </div>
    <img alt="proficiency logo" class="main-image"
         style="{prof.id%2 !== 0 ? `top:50%;  transform: translate(${$toX-50}%, -50%);` : `top:50%; right:0;  transform: translate(${Math.abs($toX)+50}%, -50%);`}"
         src={prof.img}/>
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
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    height: 200px;

    //transition: all 0.2s ease-in-out;

  }

  .card:hover {
    cursor: pointer;



    .text {
      overflow-y: scroll;
      overflow-x: hidden;
      //transition: all 0.2s ease-in-out;
    }


  }

  .left-side {
    padding: 20px;
    border-radius: 10px 0 0 10px;
    color: white;
    background-color: #0D1821;
    width: 70%;
  }

  .name-container {
    font-weight: bold;
    color: white;
    display: flex;
    font-size: 1.2em;
    justify-content: center;
    align-items: center;
  }

  .name-container::after {
    content: '';
    margin-left: 10px;
    border-bottom: 5px solid white;
    width: 100%;
  }

  .text {
    height: 150px;;
    overflow: hidden;
    font-size: 1.05em;
    //transition: all 0.2s ease-in-out;


  }

  .right-side {
    padding: 20px;
    width: 60%;
    border-radius: 0 10px 10px 0;
    box-shadow: -9px 0px 14px -4px rgba(0, 0, 0, 0.86);
    //transition: all 0.2s ease-in-out;

  }

  @media (max-width: 900px) {
    .card-container {
      width: 100%;
    }
    .card:hover {
      scale: 1;

    }
  }
</style>
