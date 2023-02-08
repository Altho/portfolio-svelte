<script>

    import Page from "../../components/blog/page/Page.svelte";
    import {onMount} from "svelte";
    import {supabase} from "../../lib/client";
    import {posts} from "../../lib/stores";
    import Preview from "../../components/blog/preview/Preview.svelte";
    import '../../styles/markdown.css'


    onMount(async () => {
        const {data} = await supabase.from("blog").select('content, title, id, created_at, slug').order('created_at', {ascending: false});
        posts.set(data);
    })
</script>

<Page>
    {#each $posts as post (post.id)}
        <Preview infos={post}/>
    {:else}
        Loading...
    {/each}

</Page>

<style>
</style>


