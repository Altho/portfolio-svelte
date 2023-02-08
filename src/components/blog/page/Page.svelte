<script>
    import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";
</script>

<div class="page" transition:scale>
    <slot />
</div>


<style lang="scss">
  .page {
    width: 100%;
    color:white;
    min-height: 80vh;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #0D1821;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  }
  .styled-at-component {
    display: contents;
  }
  .styled-at-component :global(h2) {
    color: red;
  }




</style>
