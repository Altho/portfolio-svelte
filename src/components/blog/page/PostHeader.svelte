<script>
    import Back from "../../nav/Back.svelte";
    import dayjs from 'dayjs'
    import localizedFormat from 'dayjs/plugin/localizedFormat';
    dayjs.extend(localizedFormat)
    export let data;

    const date = dayjs(data.date).format('LL');
</script>

<div class="container">
    <Back />
    <div class="infos">
        <div class="title">{data.title}</div>
        <div class="date">{date}</div>
    </div>
</div>

<style lang="scss">
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .infos {
      display: flex;
      flex-direction: column;
        align-items: flex-end;
      text-align: end;
    }
    .date {
      font-size: 12px;
      color: #b3b3b3;
      margin-bottom: 10px;
      margin-top: 0;
    }
    .title {
      font-weight: bold;
      color: #344966;
    }
</style>
