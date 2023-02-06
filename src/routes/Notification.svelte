<script lang="ts">

    import {fade, fly} from 'svelte/transition';
    export let messageType: string;

    const getColor = () => {
      if(messageType === 'Success') {
        return '#28b853';
      }
      else {
        return '#c21535'
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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  @media (max-width: 900px) {



    .notification {
     width:80%;
    }


  }
</style>
