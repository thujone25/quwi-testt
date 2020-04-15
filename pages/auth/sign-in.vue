<template>
  <div class="sign-in">
    <div class="sign-in__form-wrapper">
      <auth-form @formsubmitted="catchSuccess" />
    </div>
  </div>
</template>

<router>
  {name: 'SignInPage', meta: {guestOnly: true}}
</router>

<script>
  import {mapActions, mapMutations} from 'vuex';
  import SignInForm from '@/components/auth_components/SignInForm';

  export default {
    components: {
      'auth-form': SignInForm
    },
    methods: {
      ...mapActions('AuthStore', ['signIn']),
      ...mapMutations(['setRequestProgress']),
      catchSuccess() {
        this.$router.replace('/');
      }
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

