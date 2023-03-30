<script>
    import dayjs from 'dayjs'
    import relativeTime from 'dayjs/plugin/relativeTime';
    import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";


    dayjs.extend(relativeTime)
    export let data;
    const date = dayjs(data.created_at).fromNow();


</script>

<div class="comment" transition:fade>
    <div class="comment-header">
        <div>By <span class="name"> {data.name} </span></div>
            <span class="date"> {date}</span>
    </div>
    <div class="comment-body">
        {data.comment}
    </div>

</div>

<style lang="scss">
  .comment {
    border-radius: 5px;
    color: white;
    margin-bottom: 10px;

    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  }

  .comment-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .name {
      font-weight: bold;
      color: #8e179b;
    }
  }

  .comment-body {
    margin-left: 5px;
    padding-left: 5px;
    border-left: 3px solid #1C3041;
    margin-bottom: 10px;
  }
</style>
