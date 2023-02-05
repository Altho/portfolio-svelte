<script lang="ts">
    import Title from "./Title.svelte";
    import {enhance} from '$app/forms';
    import {fade, fly} from 'svelte/transition';
    import Notification from "./Notification.svelte";

    let name;
    let email;
    let message;
    let isLoading = false;
    let isError = false;
    let isSuccess = false;
    let gotNotification = false

    const setUnmount = () => {
        gotNotification = true;
        setTimeout(() => {
            gotNotification = false
        }, 3000)
    }


</script>
<section>
    <Title>CONTACT</Title>

    <form method="post" on:submit={() => {isLoading=true}} use:enhance={({form, data, action, cancel}) => {

    return async ({ result }) => {
        isError = false;
        isSuccess = false;
        if (result.type === 'success') {
            setUnmount();
            isLoading = false;
            isSuccess = true;
            form.reset();

        } else {
            setUnmount();
            isLoading = false;
            isError = true;
        }
    }
}}>


        {#if isError}
            <Notification messageType="Error">Something went wrong</Notification>
        {/if}
        {#if isSuccess && gotNotification}
            <Notification messageType="Success">Your message was sent !</Notification>

        {/if}
        <div class="contact-infos">
            <div class="input-container">
                <label for="name">Name <span>*</span> :</label>
                <input name="name" type="text" id="name" placeholder="Name" bind:value={name}/>
            </div>
            <div class="input-container">
                <label for="email">Email <span>*</span> :</label>
                <input name="email" type="email" id="email" required placeholder="Email" bind:value={email}/>
            </div>
        </div>
        <div class="input-container">
            <label for="message">Message <span>*</span> :</label>
            <textarea name="message" id="message" required bind:value={message}></textarea>
        </div>
        <button type="submit">
            {#if isLoading}
                Sending...
            {:else}
                Send
            {/if}
        </button>


    </form>
</section>

<style lang="scss">


  section {
    position: relative;
  }


  form {
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }

  input {
    padding: 5px;
    all: unset;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    background-color: #344966;
    border: 2px solid #1C3041;
    transition: all 0.2s ease-in-out;
    margin-bottom: 10px;

    &:focus {
      background-color: #1C3041;
    }
  }

  textarea {
    all: unset;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #344966;
    border: 2px solid #1C3041;
    transition: all 0.2s ease-in-out;

    &:focus {
      background-color: #1C3041;
    }
  }

  .contact-infos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .input-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }



  button {
    background-color: #344966;
    border: 2px solid #0D1821;
    width: 200px;
    color: #0D1821;
    border-radius: 5px;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;
    font-size: 18px;
    text-transform: uppercase;

    &:hover {
      background-color: #0D1821;
      color: #344966;
      border: 2px solid #0D1821;
      cursor: pointer;
    }

    &:active {
      transform: translate(2px, 2px);
      box-shadow: rgb(0, 0, 0) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.5) -3px -3px 6px 1px inset;
    }
  }


</style>



