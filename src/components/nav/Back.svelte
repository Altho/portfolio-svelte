

<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

const goSomeWhereBack = () => {
    goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
}
</script>

<button on:click={goSomeWhereBack}><img alt="go back" width="30" src="/images/back.svg" /></button>

<style lang="scss">
    button {
        all: unset;
      transition: 0.2s ease-in-out all;
      &:hover {
        cursor: pointer;
        scale: 1.1;
      }
    }
</style>
