<script lang="ts">
    import PageButton from "./PageButton.svelte";
    import {pages, currentPage} from "$lib/stores";

    $: page = $currentPage
    $: maxPage = $pages;



   $: {
    console.log('current page front', page)
   }






</script>

<div class="container">
    {#if $pages}
        {#if page > 2 }
            <PageButton direction="first" number='1'/>
        {/if}
        {#if page - 1 > 0}
            <PageButton direction="prev" number={page - 1 }/>
        {/if}
        <div class="current-page">{page}</div>
        {#if page + 1 <= $pages}
            <PageButton direction="next" number={page + 1 }/>
        {/if}
        {#if page <= maxPage - 2}
            <PageButton direction="last" number={maxPage}/>
        {/if}
    {/if}

</div>

<style lang="scss">
    .container {
        display: flex;
      margin-top: 20px;
        justify-content: center;
        position: relative;
        align-items: center;
        height: 100%;
        width: 100%;
        .current-page {
          filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
            font-size: 2rem;
            font-weight: 600;
          display: flex;
          justify-content: center;
          width: 40px;
        }
    }
</style>
