<script>
    import Title from "./Title.svelte";

    let name;
    let email;
    let message;
</script>


<form method="post">
    <Title>CONTACT</Title>
    <div class="container">
        <input placeholder="Name" bind:value={name}/>
        <input type="email" required placeholder="Email" bind:value={email}/>
        <textarea required bind:value={message}/>
        <button type="submit">Send</button>

    </div>



</form>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  button {
    width: 40%;
    padding: 15px 30px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    background-color: #0D1821;
    color: white;
    &:hover {
      background-color: #060D13;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    }

  }
  input {
    width: 100%;
    height: 20px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    background-color: #0D1821;
    transition: all 0.2s ease-in-out;
    color: white;


    &:focus {
      outline: none;
      background-color: #344966;
      transition: all 0.2s ease-in-out;
      box-shadow: 0px 0px 15px 5px #B4CDED;
    }
    &::placeholder {
      color: #fff;
    }
  }

  textarea {
    border: 1px solid #000;
    min-height: 80px;
    max-height: 200px;
    max-width: 100%;
    min-width: 100%;
    border-radius: 5px;
    color: white;
    padding: 10px;
    background-color: #0D1821;
    &:focus {
      outline: none;
      background-color: #344966;
      transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      box-shadow: 0px 0px 15px 5px #B4CDED;
    }

  }
</style>
