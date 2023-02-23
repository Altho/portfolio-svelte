<script>
    import Page from "../../../components/blog/page/Page.svelte";
    import Markdown from 'svelte-exmarkdown';
    import {gfmPlugin} from 'svelte-exmarkdown/gfm';
    import '../../../styles/markdown.scss'
    import Comments from "../../../components/blog/comment/Comments.svelte";
    import CommentForm from "../../../components/blog/comment/CommentForm.svelte";
    import PostHeader from "../../../components/blog/page/PostHeader.svelte";

    export let data;

    const infos = {title: data.post.title, date: data.post.created_at}
    let md = data.post.content

</script>

<svelte:head>
    <title>{"Altho " + "-" + " " + data.post.title}</title>
</svelte:head>

<Page>
    <PostHeader data={infos}/>
    <div class="header">
        {data.post.title}
    </div>
    <div class="styled-from-outside">
        <Markdown {md} plugins={[gfmPlugin]}/>
    </div>
</Page>
<CommentForm postId={data.post.id}/>
<Comments blogId={data.post.id}/>

<style>
    .header {
        font-size: 2rem;
        font-weight: 600;
        margin: 20px 0;
        text-align: center;
    }
</style>




