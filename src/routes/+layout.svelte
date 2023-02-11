<script lang="ts">
    import Header from '../components/Header.svelte';
    const year = new Date().getFullYear()
    import { fade, blur, fly, slide, scale } from "svelte/transition";

</script>


<div class="app">
    <Header/>

    <main>
        <slot/>
    </main>

    <footer>
        <div class="footer-container"><p>© {year} Altho </p></div>
        <div class="socials">
            <a target="_blank" href="https://www.linkedin.com/in/alan-thomas-813334203/"><img width="50" src="/images/icons/socials/mastodon.svg" alt="mastodon"/></a>
            <a target="_blank" href="https://github.com/Altho" ><img src="/images/icons/socials/github.svg" alt="github" width="50"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/alan-thomas-813334203/"><img src="/images/icons/socials/linkedin.svg" alt="linkedin" width="50"/></a>

        </div>
    </footer>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200&family=Ubuntu:ital,wght@0,400;0,700;1,400&display=swap');

    :root {
        background-color: #344966;
    }

    .app {
        min-height: 100vh;
        font-family: Ubuntu;
        flex-direction: column;
        color: white;
        display: flex;

    }

    main {
        flex: 1;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        padding: 1rem;
        width: 100%;

        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    img {
        transition: all 0.3s ease-in-out;
    }
    img:hover {
        filter: invert(63%) sepia(51%) saturate(6955%) hue-rotate(163deg) brightness(96%) contrast(103%);
    }

    footer {
        max-width: 64rem;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        transform: translateX(-50%);
        display: flex;
        left: 50%;
        position: relative;
        justify-content: space-between;
        bottom: 0;
    }


    .socials {
        display: flex;
        justify-content: space-evenly;
        gap: 15px;
    }
    footer a {
        font-weight: bold;
    }

</style>
