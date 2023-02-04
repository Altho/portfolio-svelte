<script>
    import Title from "./Title.svelte";
    import {enhance} from '$app/forms';
    import {fade} from 'svelte/transition';

    let name;
    let email;
    let message;
    let isLoading = false;
    let isError = false;
    let isSuccess = false;


</script>
<section>
    <Title>CONTACT</Title>

    <form method="post" on:submit={() => {isLoading=true}} use:enhance={({form, data, action, cancel}) => {

    return async ({ result }) => {
        isError = false;
        isSuccess = false;
        if (result.type === 'success') {
            isLoading = false;
            isSuccess = true;
            form.reset();

        } else {
            isLoading = false;
            isError = true;
        }
    }
}}>





            {#if isError}
                <p class="error" transition:fade>Something went wrong, please try again</p>
            {/if}
            {#if isSuccess}
                <p class="success" transition:fade>Your message was sent. Thank you</p>
            {/if}
            <div class="contact-infos">
                <div class="input-container">
                    <label for="name">Name <span>*</span> :</label>
                    <input name="name" type="text"  id="name" placeholder="Name" bind:value={name}/>
                </div>
                <div class="input-container">
                    <label for="email">Email <span>*</span> :</label>
                    <input  name="email" type="email" id="email" required placeholder="Email" bind:value={email}/>
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
    height: 100vh;
    position: relative;
    ;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   gap: 20px;
  }

  label {
    display: block;
    font-size: 1.2em;
    padding-left: 10px;
    margin-bottom: 10px;
    position: relative;

    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 3px;
      background-color: #0D1821;
    }
    span {
      color: yellow;
    }
  }






  .contact-infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    gap: 30px;

    input {
        width: 100%;
    }

  }

  .input-container {
    width: 100%;
         }



  button {
    background-color: #344966;
    border: 2px solid #0D1821;
    width:200px;
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

  input {
    width: 100%;
    height: 20px;
    font-size: 16px;
    border: 1px solid #0D1821;
    border-radius: 5px;
    padding: 10px;
    background-color: #344966;
    transition: all 0.2s ease-in-out;
    color: white;


    &:focus {
      outline: none;
      background-color: #0D1821;
      border: 1px solid #0D1821;
      transition: all 0.2s ease-in-out;
    }

    &::placeholder {
      color: #fff;
    }
  }

  .error {
    width: 100%;
    padding: 10px;
    background-color: lightpink;
    border-radius: 5px;
    color: red;

  }

  .success {
    padding: 10px;
    width: 100%;
    text-align: center;
    background-color: lightgreen;
    border-radius: 5px;
    color: green;
  }

  textarea {
    border: 1px solid #000;
    min-height: 80px;
    max-height: 200px;
    max-width: 100%;
    font-size: 16px;
    min-width: 100%;
    border-radius: 5px;
    color: white;
    padding: 10px;
    background-color: #344966;

    &:focus {
      outline: none;
      background-color: #0D1821;
      border: 1px solid #0D1821;
      transition: all 0.2s ease-in-out;
    }

  }




</style>
