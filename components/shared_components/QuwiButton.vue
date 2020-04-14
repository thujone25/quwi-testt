<template>
  <button :type="type"
          :disabled="disabled"
          :class="classes"
          class="qw-btn">{{ text }}</button>
</template>

<script>
  export default {
    props: {
      type: {type: String, default: 'button'},
      text: {type: String},
      classes: {type: Array},
      disabled: {type: Boolean, default: false}
    }
  }
</script>

<style scoped>
  .qw-btn {
    display: block;
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 12px;
    color: #ffffff;
    background-color: #39517e;
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

