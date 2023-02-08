<script>
    import Welcome from "../components/Welcome.svelte";
    import Intro from "../components/Intro.svelte";
    import Proficiencies from "../components/proficiencies/Proficiencies.svelte";
    import Projects from "../components/projects/Projects.svelte";
    import Form from "../components/Form.svelte";
    import {innerWidth} from "../lib/stores";
    import ProficienciesMobile from "../components/proficiencies/ProficienciesMobile.svelte";
    import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";


    let width;
    $: width = innerWidth;

</script>

<svelte:window bind:innerWidth={$innerWidth} />


<svelte:head>
    <title>Altho</title>
    <meta name="description" content="Alan Thomas portfolio"/>
</svelte:head>

<Welcome/>
<Intro/>
{#if $width > 900}
    <Proficiencies/>
{:else}
    <ProficienciesMobile/>
{/if}

<Projects/>
<Form/>


