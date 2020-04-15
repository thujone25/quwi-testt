<template>
  <div class="default-layout">
    <default-header />
    <nuxt/>
    <qw-modal v-if="activeModal">
      <component :is="activeModal"
                 :data="modalData" />
    </qw-modal>
  </div>
</template>

<script>
  import Cookie from 'js-cookie';
  import QWModal from '@/components/shared_components/QuwiModal';
  import DefaultHeader from '@/components/shared_components/layout_components/DefaultHeader';
  // MODALS
  import ProjectEditModal from '@/components/projects_lists/ProjectEditModal';

  export default {
    components: {
      'default-header': DefaultHeader,
      'qw-modal': QWModal,
      // MODALS
      'project-edit-modal': ProjectEditModal
    },
    computed: {
      activeModal() { return this.$store.state.ModalStore.activeComponent; },
      modalData() { return this.$store.state.ModalStore.data; }
    },
    created() {
      if (Cookie.get('authToken')) {
        this.$axios.setToken(Cookie.get('authToken'), 'Bearer');
      }
    }
  };
</script>

<style scoped>
  .default-layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-top: 46px;
  }
</style>
