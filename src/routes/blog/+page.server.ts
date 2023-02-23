import {supabase} from "../../lib/client";


export async function load({url}) {
    console.log("loaded")
    const itemsPerPage = 5;
    const currentPage = parseInt(url.searchParams.get('page')) || 1;
    const from = itemsPerPage * (currentPage - 1);
    const to = from + itemsPerPage - 1;
    const {data, count} = await supabase.from("blog").select('content,intro, title, id, created_at, slug', {
        count: 'exact'
    }).range(from, to).eq("published", true).order('created_at', {ascending: false});
    const pageAmount = Math.ceil(count as number / itemsPerPage)
    console.log('server pageamount', pageAmount)
    console.log('server current page', currentPage)
        return {
            props: {
                currentPage,
                data,
                pageAmount

            }
        };

}
