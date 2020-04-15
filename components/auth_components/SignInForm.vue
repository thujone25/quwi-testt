<template>
  <form class="sign-in-form"
        @submit.stop.prevent="submitData">
    <h2 class="sign-in-form__title">LOGIN</h2>
    <qw-input :value="email"
              :type="'email'"
              :error-text="emailError"
              :placeholder="'Email'"
              :disabled="requestInProgress"
              :id="emailId"
              class="sign-in-form__input"
              @valuechanged="catchEmail" />
    <qw-input :value="password"
              :type="'password'"
              :error-text="passwordError"
              :placeholder="'Password'"
              :disabled="requestInProgress"
              :id="passwordId"
              class="sign-in-form__input"
              @valuechanged="catchPassword" />
    <qw-btn :text="'LOGIN'"
            :type="'submit'"
            :disabled="requestInProgress"
            class="sign-in-form__btn" />
  </form>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        emailId: 'emailField',
        passwordId: 'passwordField'
      };
    },
    computed: {
      ...mapState(['requestInProgress'])
    },
    watch: {
      password() {
        setTimeout(() => {
          this.fillInputs();
        }, 50);
      },
      email() {
        setTimeout(() => {
          this.fillInputs();
        }, 50);
      }
    },
    methods: {
      ...mapActions('AuthStore', ['signIn']),
      ...mapMutations(['setRequestProgress']),
      catchEmail(val) { this.email = val; },
      catchPassword(val) { this.password = val; },
      fillInputs() {
        const emailField = document.getElementById(this.emailId);
        const passwordField = document.getElementById(this.passwordId);
        if (emailField && emailField.value) {
          this.email = emailField.value;
        }
        if (passwordField && passwordField.value) {
          this.password = passwordField.value;
        }
      },
      validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      submitData() {
        this.emailError = '';
        this.passwordError = '';

        if (!this.validateEmail(this.email)) this.emailError = 'Email is invalid';
        if (!this.email.trim()) this.emailError = 'Email is required';
        if (!this.password.trim()) this.passwordError = 'Password is required';

        if (!this.emailError && !this.passwordError) {
          this.setRequestProgress(true);
          this.signIn({email: this.email, password: this.password}).then(() => {
            this.setRequestProgress(false);
            this.$emit('formsubmitted');
          }).catch((error) => {
            if (error.data &&
                error.data.first_errors &&
                error.data.first_errors.email == 'Incorrect email or password.') {
              this.setRequestProgress(false);
              this.emailError = 'This user does not exist';
            }
          });
        }
      }
    },
    mounted() {
      this.fillInputs();
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

