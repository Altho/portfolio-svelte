import {Actions} from '@sveltejs/kit';
import {PRIVATE_CAPTCHA_KEY} from '$env/static/private'
import {PUBLIC_SITEKEY} from '$env/static/public'

import {supabase} from "../../../lib/client";

const key = PRIVATE_CAPTCHA_KEY
const siteKey = PUBLIC_SITEKEY

export async function load({params}) {
  const post = await supabase.from("blog").select('content, title, id, created_at, slug').eq('slug', params.slug).single();
  return {
    post: post.data
  };
}

export const actions: Actions = {
  sendComment: async ({request}) => {
    console.log('sendcomment')

    const data = await request.formData();
    const name = data.get('name');
    const token = data.get('token');
    const body = {response: token, secret: key, sitekey: siteKey};
    console.log('about to verify captcha')
    console.log(body)
    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });
    const comment = data.get('comment');
    const postId = data.get('postId')

    const res = await response.json();
    console.log(res, 'response')
    const {success} = res;
    console.log('data: ', res);
    if (success && comment && name) {
      await supabase
        .from('comments')
        .insert({name, comment, blog_id: postId})
    } else {
      throw new Error ('error')
    }


  },

};

