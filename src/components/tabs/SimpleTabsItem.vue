<template>
  <div class="tabs-item" @click="onClick" :class="{active:active}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimpleTabsItem",
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", vm => {
      this.active = vm.name === this.name;
    });
  },
  methods: {
    onClick() {
      this.eventBus.$emit("update:selected", this);
    }
  }
};
</script>

<style  lang="scss" scoped>
$blue: #409eff;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>