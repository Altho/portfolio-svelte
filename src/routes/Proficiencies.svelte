<script lang="ts">
    import {supabase} from "../lib/client";
    import {onMount} from "svelte";
    import {inview} from 'svelte-inview';
    import {writable} from "svelte/store";
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import Card from "./Card.svelte";

    type Proficiency = {
        id: number,
        name: string,
        content: string,
        color: string,
        img: string
    }



    const proficienciesStore = writable<Proficiency[]>([]);



    onMount(async () => {
        const {data} = await supabase.from("proficiencies").select("id, name, content, img, color").order('id');
        proficienciesStore.set(data as Proficiency[]);
    })

    let isInView;

</script>

<section>
    <div class="container"
         use:inview={{ unobserveOnEnter: false,  }}
         on:change={({ detail }) => {
    isInView = detail.inView;
  }}
    >
        {#if isInView}

            {#each $proficienciesStore as prof}
              <Card prof={prof}/>
            {/each}


        {/if}
    </div>

</section>


<style lang="scss">
  .container {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }



  .main {
    font-size: 3rem;
    font-weight: 700;
  }

</style>


