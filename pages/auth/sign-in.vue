<template>
  <div class="sign-in">
    <div class="sign-in__form-wrapper">
      <auth-from />
    </div>
  </div>
</template>

<router>
  {name: 'SignInPage'}
</router>

<script>
  import SignInForm from '@/components/auth_components/SignInForm';

  export default {
    components: {
      'auth-from': SignInForm
    }
  }
</script>

<style scoped>
  .sign-in {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
  }
  .sign-in__form-wrapper {
    display: block;
    width: 100%;
    max-width: 350px;
  }
</style>

