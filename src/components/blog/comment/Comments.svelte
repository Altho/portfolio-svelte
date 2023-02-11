<script>
    import {onMount} from "svelte";
    import {supabase} from "$lib/client";
    import {writable} from "svelte/store";
    import Comment from "./Comment.svelte";
    export let blogId;

    const comments = writable([])

    onMount(async () => {
        const {data} = await supabase.from("comments").select("id, name, comment, created_at").eq('blog_id', blogId).order('created_at', {ascending: false});
        comments.set(data)


        const condition = 'blog_id=eq.' + blogId

        const channel = supabase
            .channel('schema-db-changes')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    table: 'comments',
                    schema: 'public',
                    filter: condition,
                },
                (payload) => {
                   $comments = [ payload.new, ...$comments];

                }
            )
            .subscribe()

    });


</script>

<div class="container">

    {#each $comments as comment (comment.id)}

        <Comment data={comment} />

    {/each}

</div>

<style lang="scss">
    .container {
      margin-top: 20px;
      box-sizing: border-box;
    }
</style>
