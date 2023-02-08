import { posts } from '$lib/stores';
import { error } from '@sveltejs/kit';
import {get} from "svelte/store";
import {supabase} from "../../../lib/client";

export async function load({params}) {
    const post = await supabase.from("blog").select('content, title, id, created_at, slug').eq('slug', params.slug).single();
    return {
        post: post.data
    };
}

