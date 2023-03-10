<script>
    import {fade} from 'svelte/transition';
    export let width;
    export let height;
    export let radius;
</script>

<div style="width:{width}px; height:{height}px; border-radius:{radius}px" class="card"></div>





<style lang="scss">
  .card {
    position: relative;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
</style>
