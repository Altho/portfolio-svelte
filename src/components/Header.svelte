<script>
    import {page} from '$app/stores';
    import {isOverlay} from "$lib/stores.ts";

    let y = 0;

    const handleClick = () => {
        console.log('clicked')
        isOverlay.set(true)
        console.log($isOverlay)
    }

</script>

<svelte:window bind:scrollY={y}/>



<header>

    <nav>

        <ul class:scrolled={y >= 10}>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">About</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/resume') ? 'page' : undefined}>
                <a href="/resume">Resume</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <button class="contact" on:click={handleClick}>Contact</button>
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

    .contact {
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

  .contact {
    all: unset;
    cursor: pointer;
    padding: 5px;
    text-transform: uppercase;
    align-items: center;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    font-weight: 700;

    transition: all 0.2s ease-in-out;

    //&:hover {
    //  background: linear-gradient(to right bottom, #506cd8, #5560d0, #5a54c6, #5f48bd, #643ab2, #6c38b4, #7436b6, #7c33b8, #8a3ec8, #9849d9, #a654ea, #b45ffb);
    //  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    //  padding: 5px;
    //  color: white;
    //  border-radius: 5px;
    //  background-size: 140%;
    //  border: 2px solid #600978;
    //}

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
