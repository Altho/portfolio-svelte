import {supabase} from "../../lib/client";


export async function load({url}) {
    console.log("loaded")

    const {data} = await supabase.from("experiences").select('title,description,company, start, id, end, location', {
        count: 'exact'
    })


    return {
        props: {
            data,
        }
    };

}
