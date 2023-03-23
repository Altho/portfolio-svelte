<script>
    export let infos;
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    dayjs.extend(relativeTime)
    const date = dayjs(infos.created_at).fromNow();
    const preview = infos.intro.slice(0, 100);
    if(preview.length > 100) {
        infos.intro = preview + '...';
    }

</script>

<div class="container">
    <a href="/blog/{infos.slug}">
   <div class="title">{infos.title}</div>
    <p class="time">{date}</p>
    <div>
        {preview}
    </div>
    </a>
</div>

<style lang="scss">
    .container {
        color: #fff;
        padding: 15px;
        border-radius: 5px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
      transition: 0.1s all ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        cursor: pointer;
        transform: translateY(-1px);
      }
      a {
        text-decoration: none;
        color: #fff;
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
