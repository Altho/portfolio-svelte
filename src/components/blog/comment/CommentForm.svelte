<script>
    import {enhance} from '$app/forms';
    import HCaptcha from 'svelte-hcaptcha'
    import {PUBLIC_SITEKEY} from '$env/static/public'

    export let postId;
    let isSending = false;
    const key = PUBLIC_SITEKEY
    let token;

    let captcha;

    let disabled = true

    const handleError = () => {
        captcha.reset();
    }
    const handleSuccess = (payload) => {
        token = payload.detail.token
        disabled = false;
    }

    let success = false
    let comment;

</script>

<div class="container">

    <form method="post" action="?/sendComment" use:enhance={({form, data, action, cancel}) => {

    return async ({ result }) => {

        if (result.type === 'success') {
            console.log("success")
            success=true;
            disabled = true;
            captcha.reset();
            form.reset();

        } else {
           console.log("error");
           disabled = true;
            captcha.reset();
        }
    }
}}>

        Add a comment.
        <label for="name">Name: </label>
        <input id="name" required type="text" maxlength="30" name="name" placeholder="name">
        <label for="comment">Comment: </label>

        <textarea id="comment" required name="comment" placeholder="Comment" maxlength="250" bind:value={comment}></textarea>
        <div class="comment-limit">{250 - (comment?.length ?? 0)} characters left</div>
        <input type="hidden" name="postId" value={postId}/>
        <input type="hidden" name="token" value={token}/>

        <div class="button-container">
            <HCaptcha
                    sitekey={key}
                    bind:this={captcha}
                    on:success={handleSuccess}
                    on:error={handleError}
            />
            <button type="submit" on:submit={() => isSending = true} disabled={disabled}>Send</button>
        </div>

    </form>
</div>

<style lang="scss">
  form {
    color: black;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    background-color: #ebeae8;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px
  }

  input {
    padding: 5px;
    all: unset;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    background-color: white;
    border: 2px solid #666666;
    transition: all 0.2s ease-in-out;
    margin-bottom: 10px;

  }


  textarea {
    all: unset;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: white;
    border: 2px solid #666666;
    transition: all 0.2s ease-in-out;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    button {
      width: 40%;
      height: 30px;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.2s all ease-in-out;
      margin-bottom: 20px;

      &:hover:enabled {
        scale: 1.05;
      }

      &:disabled {
        border: none;
        cursor: unset;
      }
    }
  }

  .comment-limit {
    text-align: right;
    font-size: 0.8rem;
    color: #666666;
  }


</style>
