<script>

    import Page from "../../components/blog/page/Page.svelte";
    import {onMount} from "svelte";
    import {posts, pages, currentPage} from "../../lib/stores";
    import Preview from "../../components/blog/preview/Preview.svelte";
    import ButtonContainer from "../../components/pagination/ButtonContainer.svelte";

    export let data;

    $: postsStore = posts

    $: {

            posts.set(data.props.data);
            pages.set(data.props.pageAmount)
            console.log('setting current page to' + ' ' + data.props.currentPage)
            currentPage.set(data.props.currentPage)
            console.log($currentPage)

    }


</script>

<Page>
    {#if $postsStore.length}
        {#each $postsStore as post (post.id)}
            <Preview infos={post}/>
        {:else}
            Loading...
        {/each}
    {:else}
        No posts found
    {/if}


</Page>
<ButtonContainer/>

<style>
</style>


