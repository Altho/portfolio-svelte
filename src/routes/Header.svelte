<script>
    import { page } from '$app/stores';
</script>

<header>

    <nav>

        <ul>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">About</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/resume') ? 'page' : undefined}>
                <a href="/">Resume</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/resume') ? 'page' : undefined}>
                <a href="/">Blog</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
                <a href="/">Contact</a>
            </li>
        </ul>

    </nav>

</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        position: sticky;
        top:0;
    }


    nav {
        display: flex;
        justify-content: center;
        color: #fff;


    }

    svg {
        width: 2em;
        height: 3em;
        display: block;
    }



    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    li[aria-current='page'] {
        border-bottom: 2px solid red;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: #0D1821;
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }
</style>
