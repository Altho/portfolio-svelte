<script lang="ts">
    import Page from "../../components/blog/page/Page.svelte";
    import Job from "../../components/resume/Job.svelte";

    export let data;

    const jobs = data.props.data


</script>

<Page>
    <div class="summary">
        I love to solve real-world problems with web technologies. I'm a full-stack developer with a passion for
        building great user experiences. I'm currently working as a software developer at AM innovations. I love to
        learn new things and share my knowledge with others. I enjoy working with Node.js and Typescript but I also have
        been using C# to write APIs.
    </div>
    <div class="experiences">
        {#each jobs as job (job.id)}
            <Job job={job}/>
        {/each}
    </div>
</Page>

<style lang="scss">
  .experiences {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
  }
  .summary {
    font-size: 1.2rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.55);
    margin: 20px auto;
    max-width: 80%;
    padding: 0 1rem;
    position: relative;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:before {
      content: '"';
      height: 100%;
      width: 100%;
      font-family: cursive, sans-serif;
      font-size: 5rem;
      position: absolute;
      top: 0;
      left: -5%;
      color: rgba(255, 255, 255, 0.1);
      z-index: -1;
      margin: 2rem 0;
    }

  }

  @media (max-width: 768px) {
    .summary {
      max-width: 100%;
      padding: 0 1rem;
      font-size: 1rem;
      line-height: 1.3;

    }

  }


</style>
