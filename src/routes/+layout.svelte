<script lang="ts">
    import Header from './Header.svelte';


</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <footer>
        <p>Altho</p>
    </footer>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400&display=swap');
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: Ubuntu;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>
