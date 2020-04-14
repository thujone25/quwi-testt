<template>
  <div class="project-item-hours">
    <div class="project-item-hours__row">
      <p class="project-item-hours__label">time this week</p>
      <p class="project-item-hours__value">{{ weekTime }}</p>
    </div>
    <div class="project-item-hours__row">
      <p class="project-item-hours__label">this month</p>
      <p class="project-item-hours__value">{{ monthTime }}</p>
    </div>
    <div class="project-item-hours__row">
      <p class="project-item-hours__label">total</p>
      <p class="project-item-hours__value">{{ totalTime }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      project: {type: Object, required: true}
    },
    computed: {
      itemLink() {
        return {name: this.$route.name, query: {edit_item: this.project.id}};
      },
      weekTime() { return this.computeFinalTime(this.project.spent_time_week); },
      monthTime() { return this.computeFinalTime(this.project.spent_time_month); },
      totalTime() { return this.computeFinalTime(this.project.spent_time_all); }
    },
    methods: {
      addZeroToVal(val) { return String(val).length > 1 ? String(val) : `0${String(val)}`; },
      computeFinalTime(sec) {
        const hours = parseInt(sec / 3600);
        const minutes = parseInt((sec / 60) - (hours * 60));
        const seconds = sec % 60;
        return `${this.addZeroToVal(hours)}:${this.addZeroToVal(minutes)}:${this.addZeroToVal(seconds)}`;
      }
    }
  };
</script>

<style scoped>
  .project-item-hours {
    display: table;
    width: 100%;
  }
  .project-item-hours__row {
    display: table-row;
  }
  .project-item-hours__label,
  .project-item-hours__value {
    display: table-cell;
  }
  .project-item-hours__label {
    font-weight: normal;
  }
  .project-item-hours__value {
    padding-left: 10px;
    text-align: right;
  }
</style>

