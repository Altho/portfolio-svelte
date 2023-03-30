import formData from 'form-data';
import Mailgun from 'mailgun.js'
import { PRIVATE_MAILGUN_KEY } from '$env/static/private'
import type {Actions} from "@sveltejs/kit";
const mailgun = new Mailgun(formData);
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url: { pathname } }) => {
    return { pathname };
};



const mg = mailgun.client({ username: 'api', key: PRIVATE_MAILGUN_KEY });
const domain = 'sandboxefb44881421d43f7bf374b83dbfc5646.mailgun.org'

export const actions: Actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const email = data.get('email');
        if (!email) {
            throw new Error('email is required');
        }
        const name = data.get('name');
        if (!name) {
            throw new Error('Name is required')
        }
        const message = data.get('message');
        if (!message) {
            throw new Error('Message is required')
        }

        await mg.messages.create(domain, {
            from: email as string,
            to: ["contact@altho.me"],
            subject: 'new message from ' + name,
            text: message as string,
        }).catch((err) => {
            console.log(err);
        });

    },


};

