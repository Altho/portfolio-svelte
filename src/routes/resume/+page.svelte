<script lang="ts">
    import Page from "../../components/blog/page/Page.svelte";
    import Job from "../../components/resume/Job.svelte";
    import Degree from "../../components/resume/Degree.svelte";
    import Title from "../../components/resume/Title.svelte";
    import { IconSchool } from '@tabler/icons-svelte';
    import { IconMicroscope } from '@tabler/icons-svelte';
    import { IconMusic } from '@tabler/icons-svelte';
    import Personal from "../../components/resume/Personal.svelte";



    const labelColor = {
      education: '#783F8E',
      experiences: '#4F1271',
      hobbies: '#4A4063',
    }


    export let data;

    const jobs = data.props.experiences.data
    const education = data.props.education.data
    const personal = data.props.personal.data

    console.log(education)


</script>

<Page>
    <div class="summary">
        I love to solve real-world problems with web technologies. I'm a full-stack developer with a passion for
        building great user experiences. I'm currently working as a software developer at AM innovations. I love to
        learn new things and share my knowledge with others. I enjoy working with Node.js and Typescript but I also have
        been using C# to write APIs.
    </div>
    <Title icon={IconMicroscope} color={labelColor.experiences} name="Experiences"></Title>
    <div class="container">
        {#each jobs as job (job.id)}
            <Job job={job}/>
        {/each}
    </div>
    <Title name="Education" color={labelColor.education} icon={IconSchool}></Title>

    <div class="container">
        {#each education as edu (edu.id)}
            <Degree degree={edu}></Degree>
        {/each}
    </div>

    <Title name="Personal" color={labelColor.hobbies} icon={IconMusic}></Title>

    <div class="container">
        {#each personal as perso (perso.id)}
            <Personal personal={perso} ></Personal>
        {/each}
    </div>

</Page>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    margin: 2rem 0;
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
