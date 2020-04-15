<template>
  <div class="home-page">
    <section class="home-page__projects-list">
      <projects-list v-if="atLeastOneProject"
                     :projects="projectsList" />
      <p v-else
         class="home-page__no-projects-msg">You don't have any project yet...(</p>
    </section>
  </div>
</template>

<router>
  {name: 'HomePage'}
</router>

<script>
  import {mapState} from 'vuex';
  import ProjectsList from '@/components/projects_lists/ProjectsList';

  export default {
    asyncData({store}) {
      return store.dispatch('ProjectsStore/getAllProjects').catch((err) => {
        if (err.status == 401) store.dispatch('AuthStore/logOut');
      });
    },
    components: {
      'projects-list': ProjectsList
    },
    computed: {
      ...mapState('ProjectsStore', ['projectsList']),
      atLeastOneProject() { return this.projectsList && this.projectsList.length; },
      activeModal() { return this.$store.state.ModalStore.activeComponent; }
    },
    watch: {
      $route() {
        this.manageModalState();
      },
      activeModal() {
        if (this.activeModal === '') this.$router.push({name: this.$route.name, query: {}});
      }
    },
    methods: {
      manageModalState() {
        if (this.$route.query.edit_item) {
          this.$store.commit('ModalStore/setModal', {
            component: 'project-edit-modal',
            title: 'Edit project info',
            data: {
              project: this.projectsList.filter((item) => item.id == this.$route.query.edit_item)[0]
            }
          });
        } else {
          this.$store.commit('ModalStore/unsetModal');
        }
      }
    },
    mounted() {
      this.manageModalState();
    }
  }
</script>

<style scoped>
  .home-page {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 25px;
  }
  .home-page__projects-list {
    display: block;
    width: 100%;
    max-width: 767px;
  }
  .home-page__no-projects-msg {
    text-align: center;
  }
  @media (max-width: 600px) {
    .home-page {
      padding: 10px;
    }
  }
</style>

