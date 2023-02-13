import {supabase} from "../../lib/client";


export async function load({url}) {
    console.log("loqded")
    const itemsPerPage = 5;
    const currentPage = url.searchParams.get('page') || 1;
    const from = itemsPerPage * (currentPage - 1);
    const to = from + itemsPerPage;
    const {data, count} = await supabase.from("blog").select('content,intro, title, id, created_at, slug', {
        count: 'exact'
    }).range(from, to).order('created_at', {ascending: false});
    const pageAmount = Math.ceil(count as number / itemsPerPage)
    if(currentPage > count ) {
        throw new Error('404')
    } else {
        return {
            props: {
                currentPage,
                data,
                pageAmount

            }
        };
    }

}
