<script lang="ts">
  import Header from '../components/Header.svelte';
  import {IconX} from '@tabler/icons-svelte'

  const year = new Date().getFullYear()
  import {isOverlay} from "../lib/stores";
  import {fade} from "svelte/transition";
  import PageTransition from "../components/PageTransition.svelte";
  import type {LayoutServerData} from './$types';
  import Form from "../components/Form.svelte";

  export let data: LayoutServerData;

</script>


<div class="app">
    {#if $isOverlay}
        <div on:click={() => isOverlay.set(false)} class="overlay"></div>
        <div transition:fade class="form-container">
            <button on:click={() => isOverlay.set(false)} class="close"><IconX/></button>
            <Form />
        </div>
        {/if}

    <Header/>
    <main>
        <PageTransition pathname={data.pathname}>

            <slot/>

        </PageTransition>
    </main>


    <footer>
        <div  class="footer-container"><p>© {year} Altho </p></div>
        <div class="socials">
            <a target="_blank" href="https://www.linkedin.com/in/alan-thomas-813334203/"><img width="50"
                                                                                              src="/images/icons/socials/mastodon.svg"
                                                                                              alt="mastodon"/></a>
            <a target="_blank" href="https://github.com/Altho"><img src="/images/icons/socials/github.svg" alt="github"
                                                                    width="50"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/alan-thomas-813334203/"><img
                    src="/images/icons/socials/linkedin.svg" alt="linkedin" width="50"/></a>
        </div>
    </footer>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200&family=Ubuntu:ital,wght@0,400;0,700;1,400&display=swap');

    :root {
        background: #213b4c;
        background-image: linear-gradient(to right bottom, #506cd8, #5560d0, #5a54c6, #5f48bd, #643ab2, #6c38b4, #7436b6, #7c33b8, #8a3ec8, #9849d9, #a654ea, #b45ffb);


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
        padding: 0 1rem 1rem 1rem;

        width: 100%;

        max-width: 75rem;
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

    .close {
        position: absolute;
        top: 5px;
        right: 5px;
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;

    }



    .form-container {
        background: rgb(0,6,36);
        border: transparent;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        background: linear-gradient(45deg, rgba(0,6,36,1) 0%, rgba(60,9,121,1) 35%, rgba(214,0,255,1) 100%);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        position: fixed;
        width: 80vw;
        padding: 20px;
        height: 80vh;
        left: 50%;
        top: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        z-index: 99;
    }


    .socials {
        display: flex;
        justify-content: space-evenly;
        gap: 15px;
    }

    footer a {
        font-weight: bold;
    }

    :global(body) {
        margin: 0;
    }

</style>
