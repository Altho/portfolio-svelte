<script>
    import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";
</script>

<div class="page" transition:scale>
    <slot />
</div>


<style lang="scss">
  .page {
    width: 100%;
    min-height: 80vh;
    padding: 15px;
    color:#fff;
    box-sizing: border-box;
    margin-bottom : 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  }
  .styled-at-component {
    display: contents;
  }





</style>
