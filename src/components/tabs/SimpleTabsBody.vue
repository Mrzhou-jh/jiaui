<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script lang="js">
  export default {
    name: 'SimpleTabsBody',
    inject: ['eventBus'],
  };
</script>

<style lang="scss" scoped>

</style>