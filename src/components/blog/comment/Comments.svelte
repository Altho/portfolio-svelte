<script>
    import {onMount} from "svelte";
    import {supabase} from "$lib/client";
    import {writable} from "svelte/store";
    import Comment from "./Comment.svelte";

    export let blogId;
    let commentsAmount;

    const comments = writable([])
    let from = 10;
    let to = 20;

    const getMoreComments = async () => {
        const {
            data
        } = await supabase.from("comments").select("id, name, comment, created_at").eq('blog_id', blogId).range(from, to).order('created_at', {ascending: false});
        data.forEach(c => {
            if(c.length < 250) {
                $comments = [...$comments, c];
            }
        })

        from = from + 11;
        to = from + 10;
    }

    onMount(async () => {
        const {data, count} = await supabase.from("comments").select("id, name, comment, created_at", {
            count: 'exact'
        }).eq('blog_id', blogId).range(0, 9).order('created_at', {ascending: false});
        commentsAmount = count;
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
                    $comments = [payload.new, ...$comments];

                }
            )
            .subscribe()

    });


</script>

<div class="container">
    {#if $comments}
        {#each $comments as comment (comment.id)}
            <Comment data={comment}/>

        {/each}
        {#if commentsAmount > from}
            <button on:click={getMoreComments}>Load more comments</button>

        {/if}
    {/if}

</div>

<style lang="scss">
  .container {
    margin-top: 20px;
    box-sizing: border-box;

    button {
      all: unset;
      cursor: pointer;
    }
  }
</style>
