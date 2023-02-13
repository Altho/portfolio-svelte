<script lang="ts">
    import PageButton from "./PageButton.svelte";
    import {pages} from "$lib/stores";
    export let currentPage;

    $: actualPage = currentPage

    console.log("---")


    const isTherePrevPage = () => {
        console.log(actualPage)
        console.log(actualPage - 1 > 0)
        return actualPage - 1 > 0;
    }

    const isThereNextPage = () => {
        console.log(actualPage + 1 <= $pages)
        return actualPage + 1 <= $pages;
    }




</script>

<div class="container">
    {#if $pages}
        {#if isTherePrevPage()}
            <PageButton direction="prev" number={parseInt(currentPage) - 1 }/>
        {/if}
        <div class="current-page">{currentPage}</div>
        {#if isThereNextPage()}
            <PageButton direction="next" number={parseInt(currentPage) + 1 }/>
        {/if}
    {/if}

</div>

<style lang="scss">
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        .current-page {
            font-size: 2rem;
            font-weight: 600;
          display: flex;
          justify-content: center;
          width: 40px;
          border: 3px solid black;
          border-radius: 50%;
        }
    }
</style>
