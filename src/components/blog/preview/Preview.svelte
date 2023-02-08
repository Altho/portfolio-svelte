<script>
    export let infos;
    const preview = infos.content.slice(0, 100);
    if(preview.length > 100) {
        infos.content = preview + '...';
    }

</script>

<div class="container">
    <a href="/blog/{infos.slug}">
   <div class="title">{infos.title}</div>

    <div>
        {preview}
    </div>
    </a>
</div>

<style lang="scss">
    .container {
        color: #ececec;
        padding: 15px;

        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
      transition: 0.1s all ease-in-out;
      background-color: #1C3041;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        cursor: pointer;
        transform: translateY(-1px);
      }
      a {
        text-decoration: none;
        color: #ececec;
      }
    }

    .title {
        font-size: 20px;
        font-weight: 600;

    }
    .time {
        font-size: 12px;
        color: #b3b3b3;
        margin-bottom: 10px;
        margin-top: 0;
    }
</style>
