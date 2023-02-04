<script>
    import Welcome from "./Welcome.svelte";
    import Intro from "./Intro.svelte";
    import Proficiencies from "./Proficiencies.svelte";
    import Projects from "./Projects.svelte";
    import Form from "./Form.svelte";
    import {innerWidth} from "../lib/stores";
    import ProficienciesMobile from "./ProficienciesMobile.svelte";

    let width;
    $: width = innerWidth;

</script>

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

