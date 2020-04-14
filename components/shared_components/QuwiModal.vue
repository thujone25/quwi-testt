<template>
  <div class="qw-modal">
    <div class="qw-modal__content">
      <div class="qw-modal__title-wrapper">
        <h2 class="qw-modal__title">{{ title }}</h2>
        <button class="qw-modal__close-btn"
                @click="closeModal">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      data() { return this.$store.state.ModalStore.data; },
      title() { return this.$store.state.ModalStore.title; }
    },
    methods: {
      closeModal() { this.$store.commit('ModalStore/unsetModal'); }
    }
  };
</script>

<style scoped>
  .qw-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .qw-modal__content {
    display: inline-block;
    width: auto;
    max-width: 100%;
    background-color: #ffffff;
  }
  .qw-modal__title-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 35px;
    padding: 0 15px;
  }
  .qw-modal__title {
    display: block;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
  }
  .qw-modal__close-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
</style>

