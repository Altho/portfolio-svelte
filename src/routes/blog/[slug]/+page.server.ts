import {Actions} from '@sveltejs/kit';
import {PRIVATE_CAPTCHA_KEY} from '$env/static/private'
import {PUBLIC_SITEKEY} from '$env/static/public'

import {supabase} from "../../../lib/client";

const key: string = PRIVATE_CAPTCHA_KEY
const siteKey: string = PUBLIC_SITEKEY

export async function load({params}) {
  const post = await supabase.from("blog").select('content,title, id, created_at, slug').eq('slug', params.slug).single();
  console.log(post.data, 'post')
  return {
    post: post.data
  };
}

export const actions: Actions = {
  sendComment: async ({request}) => {

    const data = await request.formData();
    const name = data.get('name');
    const token = data.get('token');
    const comment = data.get('comment');
    const postId = data.get('postId')

    const body = new URLSearchParams({
      secret: key,
      response: token as string,
      sitekey: siteKey
    })

    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });


    const res = await response.json();
    const {success} = res;
    if (success && comment && name) {
      await supabase
        .from('comments')
        .insert({name, comment, blog_id: postId})
    } else {
      throw new Error ('error')
    }


  },

};

