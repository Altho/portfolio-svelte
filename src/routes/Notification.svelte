<script lang="ts">

    import {fade, fly} from 'svelte/transition';
    export let messageType: string;

    const getColor = () => {
      if(messageType === 'Success') {
        return 'green';
      }
      else {
        return 'red'
      }
    }

</script>

<div class="notification" in:fly={{y:400, duration: 400}} out:fade style="background-color: {getColor()}"><slot /></div>

<style lang="scss">
  .notification {
    padding: 10px;
    width: 40%;
    border-radius: 5px;
    position: absolute;
    bottom: 0px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
</style>
