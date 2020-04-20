<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "SimpleTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  data() {
    return { eventBus: new Vue() };
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "SimpleTabsHead") {
        vm.$children.forEach((childrenVm) => {
          if (childrenVm.$options.name === "SimpleTabsItem" && childrenVm.name === this.selected) {
            this.eventBus.$emit("update:selected", childrenVm);
          }
        });
      }
    });
  },
};
</script>

<style></style>
