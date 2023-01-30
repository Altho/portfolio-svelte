<script lang="ts">
  import {supabase} from "../lib/client";
  import {onMount} from "svelte";
  import {fade} from 'svelte/transition';
  import {inview} from 'svelte-inview';
  import {writable} from "svelte/store";

  type Proficiency = {
    name: string,
    content: string,
    color: string,
    img: string
  }

  const proficienciesStore = writable<Proficiency[]>([]);

  onMount(async () => {
    const {data} = await supabase.from("proficiencies").select("name, content, img, color");
    proficienciesStore.set(data as Proficiency[]);
  })

  let isInView;

</script>

<section>
    <div class="container"
         use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
         on:change={({ detail }) => {
    isInView = detail.inView;
  }}
    >
        {#if isInView}

            {#each $proficienciesStore as prof}
                <div class="card-container">

                    <div class="card" transition:fade={{duration: 1000 }}>

                        <div class="left-side">
                        Content: {prof.content}
                    </div>
                    <div class="right-side" style="background-color: {prof.color};">
                        {prof.name}

                    </div>
                </div>
                    <img alt="proficiency logo" class="main-image" src={prof.img}/>

                </div>
            {/each}


        {/if}
    </div>

</section>


<style lang="scss">
  .container {
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start ;
    gap: 20px;
  }

  .card-container {
    position: relative;
  }

  .main {
    font-size: 3rem;
    font-weight: 700;
  }

  .main-image {
    height: 100px;
    position: absolute;
    z-index: 5;
    top:50%;
    transform: translateY(-50%);
  }

  .card {
    border-radius: 10px;
    margin-left: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
  }

  .left-side {
    padding: 20px;
    width:70%;
  }
  .right-side {
    padding: 20px;
  }
</style>


