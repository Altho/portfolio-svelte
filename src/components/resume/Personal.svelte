<script lang="ts">
  type Personal = {
    id: number;
    content: string;
  };

  export let personal: Personal;
</script>


<div class="container">
        <p >{personal.content}</p>
</div>

<style lang="scss">
  h1, h2, h3, p {
    margin: 0;
  }

  .container {
    border-left: 5px solid rgba(0, 0, 0, 0.2);
    padding-left: 1rem;
  }


</style>
