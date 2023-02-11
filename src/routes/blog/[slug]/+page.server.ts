import {Actions, error} from '@sveltejs/kit';
import {supabase} from "../../../lib/client";

export async function load({params}) {
    const post = await supabase.from("blog").select('content, title, id, created_at, slug').eq('slug', params.slug).single();
    return {
        post: post.data
    };
}

export const actions: Actions = {
    sendComment: async ({request}) => {
        console.log("sent")
        console.log(request.name)
        const data = await request.formData();


        const name = data.get('name');
        console.log(name);
        if (!name) {
            throw new Error('Name is required')
        }
        const comment = data.get('comment');
        const postId = data.get('postId')
        console.log(comment);
        if (!comment) {
            throw new Error('Message is required')
        }

        await supabase
          .from('comments')
          .insert({ name, comment, blog_id: postId })


    },

};

