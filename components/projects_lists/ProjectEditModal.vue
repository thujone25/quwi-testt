<template>
  <form class="proj-edit-modal"
        @submit.stop.prevent="catchForm">
    <qw-input :value="name"
              :error-text="nameError"
              :placeholder="'Name'"
              :disabled="requestInProgress"
              class="proj-edit-modal__input"
              @valuechanged="catchName" />
    <qw-btn :text="'SET'"
            :type="'submit'"
            :disabled="requestInProgress"
            class="proj-edit-modal__btn" />
  </form>
</template>

<script>
  import {mapActions, mapState, mapMutations} from 'vuex';

  export default {
    props: ['data'],
    data() {
      return {
        name: this.data.project.name || '',
        nameError: ''
      };
    },
    computed: {
      ...mapState(['requestInProgress'])
    },
    methods: {
      ...mapActions('ProjectsStore', ['updateProject']),
      ...mapMutations(['setRequestProgress']),
      ...mapMutations('ModalStore', ['unsetModal']),
      catchName(val) { this.name = val; },
      catchForm() {
        this.nameError = '';

        if (!this.name.trim()) this.nameError = 'Name is required';

        if (!this.nameError) {
          this.setRequestProgress(true);
          this.updateProject({id: this.data.project.id, data: {name: this.name}}).then(() => {
            this.setRequestProgress(false);
            this.unsetModal();
          }).catch((err) => {
            this.setRequestProgress(false);
            console.log(err.data);
          });
        }
      }
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

