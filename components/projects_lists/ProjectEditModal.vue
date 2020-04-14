<template>
  <form class="proj-edit-modal">
    <qw-input :value="name"
              :error-text="nameError"
              :placeholder="'Name'"
              class="proj-edit-modal__input" />
    <qw-btn :text="'SET'"
            class="proj-edit-modal__btn" />
  </form>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        name: this.data.project.name || '',
        nameError: ''
      };
    }
  };
</script>

<style scoped>
  .proj-edit-modal {
    display: block;
    width: 450px;
    max-width: 100%;
    padding: 20px 15px;
  }
  .proj-edit-modal__input {
    margin-bottom: 15px;
  }
  .proj-edit-modal__btn.proj-edit-modal__btn {
    display: inline-block;
    width: auto;
    padding: 0 30px;
  }
</style>

