<script lang="ts">
    type Degree = {
        id: number;
        year: number;
        school: string;
        degree: string;
        city: string;
    };

    export let degree: Degree;
</script>


<div class="container">
    <div class="header">
        <h1>{degree.degree}</h1>
        <p class="subtext">{degree.year}</p>
    </div>
    <div class="company">
        <h2>{degree.school}</h2>
        <p class="subtext">{degree.city}</p>
    </div>


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
