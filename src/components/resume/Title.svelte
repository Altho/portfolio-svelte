<script lang="ts">
    export let name;
    export let icon ;
    export let color;
</script>

<div class="container">
    <h1 class="name">{name}</h1>
    {#if icon}
        <div style="background-color: {color}" class="icon-container"> <svelte:component this={icon} /></div>
    {/if}
</div>


<style lang="scss">
    .container {
      margin-left: -16px;
      display: flex;
      position: relative;
        align-items: center;
        justify-content: space-between;
      width: fit-content;
      padding-right: 60px;
      border-radius: 0 15px 15px 0;
      box-shadow: rgba(11, 22, 32, 0.63) 3px 3px 6px 0px inset, rgba(19,10,10,0.25) -3px -3px 6px 1px inset;

    }
    .name {
        padding: 5px;
        margin: 0;
      box-sizing: border-box;

    }

    .icon-container {
        padding: 5px 15px;
      position: absolute;
      display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
      border-radius: 0 15px 15px 0;
      height: 100%;
      box-sizing: border-box;
      box-shadow: -9px 1px 22px -6px rgba(0,0,0,0.75);
      //z-index: -1;
    }

    @media (max-width: 720px) {
        .container {
            max-width: 80%;

        }
    }
</style>
