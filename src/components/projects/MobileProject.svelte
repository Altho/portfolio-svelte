<script lang="ts">


    export let projects
    import {fly, fade} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import {supabase} from "$lib/client.ts";
    import {writable} from "svelte/store";
    import {spring} from "svelte/motion";
    import {cubicOut, bounceInOut} from "svelte/easing";
    const options = {}
    export let i;

    export let direction;



    console.log(projects)


    const y = spring(95, {
        stiffness: 0.1,
        damping: 0.35
    });




    let cardBackShowing = false;

    const toggleBackFront = () => {
       cardBackShowing = !cardBackShowing;
    }

</script>


<div
        class="flip-box"
        on:click={toggleBackFront}
>
        <div class="flip-box-inner" class:show-back={cardBackShowing}>
        <div style="background-image: url({projects.image})" class="flip-box-front card"  >


        </div>


        <div class="flip-box-back container"><div >
            <p class="name">{projects.name}</p>
        </div><div class="content">
            <p class="description">{projects.content}</p>
            <a class="visit" target="_blank" href={projects.url}>VISIT</a>
            <div class="tech-container">
                <div class="technologies">
                    {#each projects.technologies as tech (tech.id)}
                        <img alt="tech logo" src={tech.logo}>
                    {:else}
                        ..Loading
                    {/each}
                </div>
            </div>
            </div></div>

        </div>


</div>






        <style lang="scss">
          .card {

            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;



          }

          .container {
            padding: 5px;
          }

          .name {
            text-transform: uppercase;
            color:black;
            top: 20px;
            font-weight: bold;
            font-size: 1.5em;

          }

          .content {
            height: 100%;
            color:black;
          }

          .description {
            padding: 5px;
          }


          .tech-container {
            position: absolute;
            display: flex;
            justify-content: center;
            bottom: 0;
            width: 100%;
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
            box-shadow: 0px -4px 6px 1px rgba(0, 0, 0, 0.95)



          }

          .visit {
            text-decoration: none;
            background: #bdc3c7;

            color: #2c3e50;
            font-weight: bold;
            border-radius: 5px;
            padding: 10px;
            transition: all 0.2s ease-in-out;
            &:hover{
                background: #2c3e50;
                color: #bdc3c7;
                box-shadow:  0px 0px 0px 2px #bdc3c7, 0px 0px 0px 4px #2c3e50;
          }
          }



          .flip-box {
            background-color: transparent;
            width: 80vw;

            margin: 0 20px 40px;
            perspective: 1000px; /* Remove this if you don't want the 3D effect */
          }

          /* This container is needed to position the front and back side */
          .flip-box-inner {
            //position: relative;
            width: 100%;
            text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;
          }

          /* Do an horizontal flip when you move the mouse over the flip box container */
          /* 	.flip-box:hover .flip-box-inner {
                  transform: rotateY(180deg);
              } */

          .show-back {
            transform: rotateY(180deg);
          }

          /* Position the front and back side */
          .flip-box-front, .flip-box-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;
          }

          /* Style the front side */
          .flip-box-front {

            height: 100%;
          }

          /* Style the back side */
          .flip-box-back {
            display: flex;
            background: linear-gradient(to bottom, #bdc3c7, #2c3e50);
            border-radius: 15px;
            flex-direction: column;
            position: relative;
            justify-content: space-between;
            color: white;
            width: 100%;
            height: 450px;
            transform: rotateY(180deg) translateX(6px);
          }




          .card:hover {
            cursor: pointer;
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

          }




        </style>
