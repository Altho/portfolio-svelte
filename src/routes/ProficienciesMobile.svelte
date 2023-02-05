<script lang="ts">
  import {supabase} from "../lib/client";
  import {onMount} from "svelte";
  import {writable} from "svelte/store";
  import Card from "./Card.svelte";
  import Title from "./Title.svelte";
  import CardMobile from "./CardMobile.svelte";
  import CardSkeleton from "./CardSkeleton.svelte";
  import CardMobileSketelton from "./CardMobileSketelton.svelte";

  type Proficiency = {
    id: number,
    name: string,
    content: string,
    color: string,
    img: string
  }

  let startIndex = 0;
  let endIndex = 1;
  let storeLength;
  let isGoingLeft = false;




  const proficiencies = [];
  const displayed = writable<Proficiency[]>([]);




  function prev() {
    console.log(isGoingLeft)
    if (storeLength < 2) return;
    isGoingLeft = true;

    if (endIndex === 2) {
      const ceiling = Math.ceil(storeLength / 2) * 2
      startIndex = ceiling - 2;
      endIndex = ceiling;
      displayed.set(proficiencies.slice(startIndex, endIndex));
    } else {
      startIndex -= 2;
      endIndex -= 2;
      displayed.set(proficiencies.slice(startIndex, endIndex));
    }
    console.log(isGoingLeft)

  }

  function next() {
    console.log(isGoingLeft)

    isGoingLeft = false;
    if (storeLength < 2) return;
    startIndex = (startIndex + 2);
    endIndex = (endIndex + 2);
    displayed.set(proficiencies.slice(startIndex, endIndex));
    if (endIndex > storeLength) {
      startIndex = 0;
      endIndex = 2;
      displayed.set(proficiencies.slice(startIndex, endIndex));

    }

    console.log(isGoingLeft)

  }

  onMount(async () => {
    const {data} = await supabase.from("proficiencies").select("id, name, content, img, color").order('id');
    proficiencies.push(...(data as Proficiency[]));
    storeLength = proficiencies.length;
    displayed.set(proficiencies.slice(startIndex, endIndex));



  });


</script>


<section>
    <Title>PROFICIENCIES</Title>
    <div class="arrow-container">
        <button class="left" on:click={prev}><img width="50" src="/images/arrow.svg"></button>
        <button class="right" on:click={next}><img class="arrow-right" width="50" src="/images/arrow.svg"></button>
    </div>
    <div class="frame">

        <div class="container">

                {#each $displayed as prof (prof.id)}
                    <CardMobile direction={isGoingLeft} prof={prof} />
                    {:else}
                    <CardMobileSketelton />
                {/each}





        </div>
    </div>

</section>


<style lang="scss">
  section {
    button {

      width: 50px;
      top: 50%;

      cursor: pointer;
      background-color: transparent;
      border: none;

      img {
        transition: all 0.2s ease-in-out;
      }
  }

  .container {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;

  }

  .frame {
    display: flex;
    position: relative;
    justify-content: center;
    //height: 80vh;



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

  .arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
  }

  .arrow-right {
    transform: rotate(180deg);
  }

  .main {
    font-size: 3rem;
    font-weight: 700;
  }



</style>


