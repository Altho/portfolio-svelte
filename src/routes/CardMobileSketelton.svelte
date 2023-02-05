<script>

</script>

<div class="card"></div>



<style lang="scss">
  .card {
    position: relative;
    width: 100%;
    height: 250px;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;

  }



  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
</style>
