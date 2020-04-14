<template>
  <form class="sign-in-form">
    <h2 class="sign-in-form__title">LOGIN</h2>
    <qw-input :value="email"
              :type="'email'"
              :error-text="emailError"
              :placeholder="'Email'"
              class="sign-in-form__input" />
    <qw-input :value="password"
              :type="'password'"
              :error-text="passwordError"
              :placeholder="'Password'"
              class="sign-in-form__input" />
    <qw-btn :text="'LOGIN'"
            class="sign-in-form__btn" />
  </form>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
      };
    }
  }
</script>

<style scoped>
  .sign-in-form {
    display: block;
    width: 100%;
    padding: 15px;
  }
  .sign-in-form__title {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  .sign-in-form__input {
    margin-bottom: 15px;
  }
  .sign-in-form__btn {
    display: inline-block;
    width: auto;
    padding: 0 30px;
  }
</style>

