<script>
    import Page from "../../../components/blog/page/Page.svelte";
    import Markdown from 'svelte-exmarkdown';
    import { gfmPlugin } from 'svelte-exmarkdown/gfm';
    export let data;
    let md = data.post.content

</script>


<Page>
    {data.post.title}
    <Markdown  {md} plugins={[gfmPlugin]}/>
</Page>





