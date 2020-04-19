<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SimpleButtonGroup",
  mounted() {
    for (const node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`s-button-group的子元素必须为s-button你写的是${name}`);
      }
    }
  }
};
</script>
<style>
.s-button-group {
  display: inline-flex;
  vertical-align: middle;
}
.s-button-group .s-button {
  margin: 0 0 0 -1px;
  border-radius: 0;
  border-color: #fff;
}
.s-button-group .s-button:hover {
  position: relative;
  z-index: 1;
}

.s-button-group .s-button:first-child {
  border-radius: 4px 0 0 4px;
}
.s-button-group .s-button:last-child {
  border-radius: 0 4px 4px 0;
}
</style>
