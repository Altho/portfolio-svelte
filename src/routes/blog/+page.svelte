<script lang="ts">

    import Page from "../../components/blog/page/Page.svelte";
    import {onMount} from "svelte";
    import {supabase} from "../../lib/client";
    import { posts } from "../../lib/stores";
    import Preview from "../../components/blog/preview/Preview.svelte";
    import {createSlug} from "../../lib/utils";





    onMount(async () => {
        const {data} = await supabase.from("blog").select('content, title, id, created_at, slug').order('created_at', {ascending: false});
        console.log(data, "data");
        posts.set(data);
        console.log(posts, "posts");
    })

</script>

<Page>
    <div class="wrapper">
        {#each $posts as post (post.id)}
            <Preview infos={post} />
        {/each}
    </div>
</Page>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: 100%;
    }
</style>


