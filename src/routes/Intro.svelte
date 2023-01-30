<script>
    import {fade} from 'svelte/transition';
    import {inview} from 'svelte-inview';

    let isInView;

</script>

<section>
    <div class="container"
         use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
         on:change={({ detail }) => {
    isInView = detail.inView;
  }}
    >
        {#if isInView}
            <div class="content" transition:fade={{duration: 1000 }}>
                <p>I am a fullstack web developper originally from France. I like that web development helps me solve
                    all kind of problems. I mainly use Node.js (with Typescript) on the backend although I'm always
                    curious about new languages (I have recently been experimenting with Rust !) and technologies. On
                    the frontend I usually use React but I have been using other libraries (my current job uses
                    Angular.js). In the end I'm pretty good at adapting and learning whatever tool is required to get
                    the job done. I made sure to learn the basics of web development (HTML, CSS, Javascript) before
                    diving into frameworks and libraries in order to allow for more transversality. I also have a good
                    understanding of databases and I have been using SQL and NoSQL databases for a while now.</p>

            </div>
        {/if}
    </div>
</section>

<style>
    .container {
        width: 100%;
        height: 100vh;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 1.2em;
        line-height: 2.5em;
        text-align: justify;

    }
</style>
