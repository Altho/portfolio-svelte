<script>
    import Page from "../../../components/blog/page/Page.svelte";
    import Markdown from 'svelte-exmarkdown';
    import {gfmPlugin} from 'svelte-exmarkdown/gfm';
    import '../../../styles/markdown.css'
    import {Highlight} from "svelte-highlight";
    import typescript from "svelte-highlight/languages/typescript";

    export let data;
    let md = data.post.content

</script>


<Page>
    {data.post.title}
    <div class="styled-from-outside">
            <Markdown {md} plugins={[gfmPlugin]}/>
            <div>
</Page>





