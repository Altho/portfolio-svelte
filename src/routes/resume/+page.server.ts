import {supabase} from "../../lib/client";


export async function load({url}) {
    console.log("loaded")

    const experiences = await supabase.from("experiences").select('title,description,company, start, id, end, location')

    const education = await supabase.from("education").select('id, year,school,degree,city')

    const personal = await supabase.from("personal").select('id, content')


    return {
        props: {
            experiences,
            education,
            personal
        }
    };

}
