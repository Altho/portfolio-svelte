<script>
    import Page from "../../../components/blog/page/Page.svelte";
    import Markdown from 'svelte-exmarkdown';
    import {gfmPlugin} from 'svelte-exmarkdown/gfm';
    import '../../../styles/markdown.scss'
    import {Highlight} from "svelte-highlight";
    import typescript from "svelte-highlight/languages/typescript";
    import Comments from "../../../components/blog/comment/Comments.svelte";
    import CommentForm from "../../../components/blog/comment/CommentForm.svelte";

    export let data;
    let md = data.post.content

</script>


<Page>
    {data.post.title}
    {data.post.id}
    <div class="styled-from-outside">
            <Markdown {md} plugins={[gfmPlugin]}/>
    </div>
</Page>
<CommentForm postId={data.post.id}/>
<Comments blogId={data.post.id}/>





