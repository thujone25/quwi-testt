<template>
  <header class="default-header">
    <nuxt-link to="/"
               class="default-header__logo-link" />
    <nav class="default-header__links-cont">
      <template v-if="authenticated">
        <nuxt-link :to="{name: 'HomePage'}"
                   class="default-header__nav-link">PROJECTS</nuxt-link>
        <button class="default-header__nav-link"
                @click="makeLogout">LOGOUT</button>
      </template>
      <template v-else>
        <nuxt-link :to="{name: 'SignInPage'}"
                   class="default-header__nav-link">LOGIN</nuxt-link>
      </template>
    </nav>
  </header>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapState('AuthStore', ['authenticated'])
    },
    methods: {
      ...mapActions('AuthStore', ['logOut']),
      makeLogout() {
        this.logOut().then(() => {
          this.$router.push({name: 'SignInPage'});
        });
      }
    }
  };
</script>

<style>
  .default-header {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 46px;
    background: #fafafa;
    box-shadow: 0 0 5px rgba(0,0,0,.25);
  }
  .default-header__logo-link {
    display: block;
    width: 46px;
    height: 100%;
    margin-left: 11px;
    background-image: url(~assets/imgs/logos/quwi-logo.png);
    background-repeat: no-repeat;
    background-size: 25px auto;
    background-position: 50% 50%;
  }
  .default-header__links-cont {
    display: flex;
    flex-shrink: 1;
    width: auto;
    height: 100%;
  }
  .default-header__nav-link {
    display: inline-block;
    width: auto;
    height: 100%;
    line-height: 46px;
    padding: 0 15px;
    font-size: .8em;
    color: #636363;
  }
  .default-header__nav-link:hover {
    color: #c44512;
    background: #e0e0e0;
  }
</style>

