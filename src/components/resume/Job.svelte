<script lang="ts">
    type Job = {
        id: number;
        title: string;
        company: string;
        location: string;
        description: string;
        start: string;
        end: string;
    };

    export let job: Job;
</script>


<div class="container">
    <div class="header">
        <h1>{job.title}</h1>
        <p class="subtext">{job.start} -
            {#if job.end}{job.end}{:else} Present{/if}
        </p>
    </div>
    <div class="company">
        <h2>{job.company}</h2>
        <p class="subtext">{job.location}</p>
    </div>
    <p class="description">{job.description}</p>


</div>

<style lang="scss">
  h1, h2, h3, p {
    margin: 0;
  }

  .container {
    border-left: 5px solid rgba(0, 0, 0, 0.2);
    padding-left: 1rem;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 1rem;
  }

  .description {
    margin-top: 10px;
    padding-left: 5px;
  }

  .subtext {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.3);
  }

    .company {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        gap: 1rem;
    }

</style>
