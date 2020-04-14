<template>
  <ul class="projects-list">
    <project-item v-for="proj in projects"
                  :project="proj"
                  :key="proj.id"
                  class="projects-list__item" />
  </ul>
</template>

<script>
  import ProjectItem from '@/components/projects_lists/ProjectItem';

  export default {
    components: {
      'project-item': ProjectItem
    },
    props: {
      projects: {type: Array}
    }
  };
</script>

<style scoped>
  .projects-list {
    display: block;
    width: 100%;
  }
  .projects-list__item {
    margin-bottom: 20px;
  }
</style>

