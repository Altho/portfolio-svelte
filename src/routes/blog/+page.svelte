<script>

    import Page from "../../components/blog/page/Page.svelte";
    import {onMount} from "svelte";
    import {supabase} from "../../lib/client";
    import {posts} from "../../lib/stores";
    import Preview from "../../components/blog/preview/Preview.svelte";
    import '../../styles/markdown.scss'
    import ButtonContainer from "../../components/pagination/ButtonContainer.svelte";

    let postsAmount;


    onMount(async () => {
        const {data, count} = await supabase.from("blog").select('content,intro, title, id, created_at, slug', {
            count: 'exact'
        }).order('created_at', {ascending: false});
        posts.set(data);
        postsAmount = count
        console.log(postsAmount)
    })
</script>

<Page>
    {#each $posts as post (post.id)}
        <Preview infos={post}/>
    {:else}
        Loading...
    {/each}

</Page>
<ButtonContainer count={postsAmount} />

<style>
</style>


