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
<Intro>I am a fullstack web developer. I like to use web development in order to solve
    all kind of problems. I'm familiar with Node.js (with Typescript) on the backend although I'm always
    curious about new languages (I have recently been experimenting with Rust !) and technologies.
    In the end I love learning whatever tool is required to get the job done.</Intro>
{#if $width > 900}
    <Proficiencies/>
{:else}
    <ProficienciesMobile/>
{/if}

<Projects/>



