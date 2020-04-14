<template>
  <li class="project-item">
    <nuxt-link :to="itemLink"
               class="project-item__link">
      <div class="project-item__data-table">
        <div :style="logoStyles"
             class="project-item__data-table-cell project-item__data-table-cell--logo"></div>
        <p class="project-item__data-table-cell project-item__data-table-cell--name">{{ project.name }}</p>
        <p :class="computedStatusCellClass"
           class="project-item__data-table-cell project-item__data-table-cell--status">{{ statusText }}</p>
        <div class="project-item__data-table-cell project-item__data-table-cell--hours">
          <project-hours :project="project" />
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
  import ProjectItemHours from '@/components/projects_lists/ProjectItemHours';

  export default {
    components: {
      'project-hours': ProjectItemHours
    },
    props: {
      project: {type: Object, required: true}
    },
    computed: {
      logoStyles() { return this.project.logo_url ? {backgroundImage: `url(${this.project.logo_url})`} : undefined; },
      itemLink() { return {name: this.$route.name, query: {edit_item: this.project.id}}; },
      statusText() { return this.project.is_active ? 'Active' : 'Not active'; },
      computedStatusCellClass() {
        return `project-item__data-table-cell--${this.project.is_active ? 'green' : 'red'}`;
      }
    }
  };
</script>

<style scoped>
  .project-item {
    position: relative;
    display: block;
    width: 100%;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .project-item__link {
    display: block;
    width: 100%;
    padding: 30px 25px;
  }
  .project-item__data-table {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .project-item__data-table-cell {
    display: block;
    flex-shrink: 0;
    font-weight: bold;
  }
  .project-item__data-table-cell--logo {
    display: block;
    width: 50px;
    height: 50px;
    background-image: url(~assets/imgs/logos/no-logo.png);
    background-size: 100% auto;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .project-item__data-table-cell--name {
    flex-shrink: 1;
    width: 20%;
    padding-left: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .project-item__data-table-cell--status {
    flex-grow: 1;
    text-align: center;
  }
  .project-item__data-table-cell--hours {
    width: 170px;
  }
  .project-item__data-table-cell--green {
    color: green;
  }
  .project-item__data-table-cell--red {
    color: red;
  }
  @media (max-width: 600px) {
    .project-item__link {
      padding: 15px;
    }
    .project-item__data-table {
      display: block;
    }
    .project-item__data-table-cell--logo {
      float: left;
    }
    .project-item__data-table-cell--name,
    .project-item__data-table-cell--status {
      float: right;
    }
    .project-item__data-table-cell--name {
      display: inline-block;
      width: auto;
      padding-left: 0;
    }
    .project-item__data-table-cell--status {
      clear: right;
    }
    .project-item__data-table-cell--hours {
      width: 100%;
      clear: both;
    }
  }
</style>

