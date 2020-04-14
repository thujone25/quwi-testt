<template>
  <div class="default-layout">
    <default-header />
    <nuxt/>
  </div>
</template>

<script>
  import DefaultHeader from '@/components/shared_components/layout_components/DefaultHeader';

  export default {
    components: {
      'default-header': DefaultHeader
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
