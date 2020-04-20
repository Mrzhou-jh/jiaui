<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: "SimpleTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", vm => {
      this.updateLinePosition(vm);
    });
  },
  methods: {
    updateLinePosition(vm) {
      //通过vm组件对象获取该组件根节点元素的矩形宽及左边距离
      let { width, left } = vm.$el.getBoundingClientRect();
      //通过当前组件对象获取该组件根节点中head节点元素的矩形宽及左边距离
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      //通过获取当前组件对象获得该组件ref指定的元素的width
      this.$refs.line.style.width = `${width}px`;
      //通过获取当前组件对象获得该组件ref指定的元素的width
      this.$refs.line.style.left = `${left - left2}px`;
    }
  }
};
</script>

<style lang='scss'>
$tab-height: 40px;
$blue: #409eff;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #dddddd;

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 200ms linear;
  }
}
</style>
