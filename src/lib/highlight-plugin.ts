import rehypeHighlight from 'rehype-highlight';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from "highlight.js/lib/languages/bash";
import html from "highlight.js/lib/languages/xml";

export const highlightPlugin = {
    rehypePlugin: [rehypeHighlight, { languages: { typescript, bash, html } }],
};
