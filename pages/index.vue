<template>
  <div class="home-page">
    <section class="home-page__projects-list">
      <projects-list :projects="projects" />
    </section>
  </div>
</template>

<router>
  {name: 'HomePage'}
</router>

<script>
  import ProjectsList from '@/components/projects_lists/ProjectsList';

  export default {
    components: {
      'projects-list': ProjectsList
    },
    data() {
      return {
        projects: [
          {
            "id": 9,
            "name": "Mitrich project",
            "uid": "mitrich-project",
            "logo_url": "http://api.quwi.loc/files/projects/9-thumb.png?v=1",
            "position": 1,
            "is_active": 1,
            "is_owner_watcher": 1,
            "spent_time_week": 558127,
            "spent_time_month": 0,
            "spent_time_all": 0,
            "users": [
              {
                "id": 10,
                "id_company": 2,
                "role": "coder",
                "name": "Demian Venture",
                "avatar_url": null,
                "is_online": 0,
                "dta_activity": "2018-08-13 08:31:05",
                "is_timer_online": 0,
                "dta_timer_activity": null,
                "timezone": null,
                "timer_last": null
              },
              {
                "id": 96,
                "id_company": 2,
                "role": "coder",
                "name": "test",
                "avatar_url": null,
                "is_online": 0,
                "dta_activity": null,
                "is_timer_online": 0,
                "dta_timer_activity": null,
                "timezone": null,
                "timer_last": null
              }
            ]
          },
          {
            "id": 13,
            "name": "My test",
            "uid": "my-test",
            "logo_url": null,
            "position": 2,
            "is_active": 1,
            "is_owner_watcher": 1,
            "spent_time_week": 0,
            "spent_time_month": 0,
            "spent_time_all": 0,
            "users": [
              {
                "id": 10,
                "id_company": 2,
                "role": "coder",
                "name": "Demian Venture",
                "avatar_url": null,
                "is_online": 0,
                "dta_activity": "2018-08-13 08:31:05",
                "is_timer_online": 0,
                "dta_timer_activity": null,
                "timezone": null,
                "timer_last": null
              },
              {
                "id": 96,
                "id_company": 2,
                "role": "coder",
                "name": "test",
                "avatar_url": null,
                "is_online": 0,
                "dta_activity": null,
                "is_timer_online": 0,
                "dta_timer_activity": null,
                "timezone": null,
                "timer_last": null
              }
            ]
          },
          {
            "id": 135,
            "name": "Project X",
            "uid": "project-x",
            "logo_url": null,
            "position": 3,
            "is_active": 1,
            "is_owner_watcher": 1,
            "spent_time_week": 0,
            "spent_time_month": 0,
            "spent_time_all": 0,
            "users": []
          },
          {
            "id": 136,
            "name": "Project X",
            "uid": "project-x-2",
            "logo_url": null,
            "position": 4,
            "is_active": 1,
            "is_owner_watcher": 1,
            "spent_time_week": 0,
            "spent_time_month": 0,
            "spent_time_all": 0,
            "users": []
          },
          {
            "id": 137,
            "name": "Project y",
            "uid": "project-x-3",
            "logo_url": null,
            "position": 5,
            "is_active": 1,
            "is_owner_watcher": 1,
            "spent_time_week": 0,
            "spent_time_month": 0,
            "spent_time_all": 0,
            "users": []
          }
        ]
      };
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
  @media (max-width: 600px) {
    .home-page {
      padding: 10px;
    }
  }
</style>

