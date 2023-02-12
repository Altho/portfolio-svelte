<script>
    import dayjs from 'dayjs'
    import relativeTime from 'dayjs/plugin/relativeTime';
    import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";


    dayjs.extend(relativeTime)
    export let data;
    const date = dayjs(data.created_at).fromNow();
    console.log(data)


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
    color: black;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 10px;
    background-color:#ebeae8;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  }

  .comment-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .name {
      font-weight: bold;
      color: #344966;
    }
  }

  .comment-body {
    margin-left: 5px;
    padding-left: 5px;
    border-left: 3px solid #1C3041;
    margin-bottom: 10px;
  }
</style>
