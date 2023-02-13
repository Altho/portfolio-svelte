<script>
    export let number;
    import { goto } from '$app/navigation'
    console.log(number, "button number")
    export let direction;

    const getClass = () => {
        if (direction === "next") {
            return "next"
        } else if (direction === "prev") {
            return "prev"
        }
    }

    const goToPage = () => {
        goto(`/blog?page=${number}`)
    }
</script>



<button on:click={goToPage} class={getClass()}>
    {number}
</button>

<style lang="scss">
    .prev {
        background-color: #f1f1f1;
        color: black;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 8px 16px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }
    .next {
        background-color: #f1f1f1;
        color: black;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 8px 16px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }

</style>
