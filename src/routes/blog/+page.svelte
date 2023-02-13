<script>

    import Page from "../../components/blog/page/Page.svelte";
    import {onMount} from "svelte";
    import {posts, pages} from "../../lib/stores";
    import Preview from "../../components/blog/preview/Preview.svelte";
    import ButtonContainer from "../../components/pagination/ButtonContainer.svelte";

    export let data;

    $: postsStore = posts

    $: {
        posts.set(data.props.data);
        pages.set(data.props.pageAmount)
    }



</script>

<Page>
    {#each $postsStore as post (post.id)}
        <Preview infos={post}/>
    {:else}
        Loading...
    {/each}

</Page>
<ButtonContainer currentPage={data.props.currentPage}/>

<style>
</style>


