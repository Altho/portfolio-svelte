<script>
    import {page} from '$app/stores';

    let y = 0;
</script>

<svelte:window bind:scrollY={y}/>

<header>

    <nav>

        <ul class:scrolled={y >= 10}>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">About</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/resume') ? 'page' : undefined}>
                <a href="/static">Resume</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
                <a href="/blog">Blog</a>
            </li>
            <li aria-current={$page.url.pathname.includes('/#form') ? 'page' : undefined}>
                <a href="/#form">Contact</a>
            </li>
        </ul>

    </nav>

</header>

<style lang="scss">
  header {
    z-index: 5;
    display: flex;
    justify-content: center;
    width: 100%;
    position: sticky;

    top: 0;
  }

  .scrolled {
    transition: all 0.2s ease-in-out;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    a {
      color: black;
    }

    li[aria-current='page'] {
      border: black 2px solid;
    }
  }


  nav {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    color: #fff;
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }


  ul {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 5px;

    background-size: contain;
  }

  li {
    position: relative;
    height: 70%;
    display: flex;
    align-items: center;

    &:hover {
      text-shadow: 2px 5px 5px rgba(0,0,0,0.86);
    }
  }

  li[aria-current='page'] {
    border: 2px solid #dddddd;
    border-radius: 5px;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: white;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }


</style>
