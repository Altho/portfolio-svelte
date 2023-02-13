<script>
    import PageButton from "./PageButton.svelte";
    import {onMount} from "svelte";
    import {writable} from "svelte/store";

    export let count;
    const itemsPerPage = 5;

    const pages = writable([])


    onMount(() => {
        const pagesResult = Math.ceil(count / itemsPerPage);
        console.log("mount")
        console.log(pagesResult,"urur")
        for(let i = 0; i < pagesResult; i++) {
            $pages = [...$pages, {number:i}]
            console.log(i)
        }
    })


</script>

<div class="container">
    {#await count}
    {#each $pages as page}
        <PageButton number="g"/>
    {/each}
        {/await}
</div>
