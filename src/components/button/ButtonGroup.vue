<template>
  <div class="j-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ButtonGroup",
  mounted() {
    console.log(this.$el.element);

    for (const node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      console.log(name);
      if (name !== "button") {
        console.warn(`j-button-group的子元素必须为g-button你写的是${name}`);
      }
    }
  }
};
</script>
<style>
.j-button-group {
  display: inline-flex;
  vertical-align: middle;
  margin-left: 1em;
}
.j-button-group .j-button {
  margin: 0 0 0 -1px;
  border-radius: 0;
}
.j-button-group .j-button:hover {
  position: relative;
  z-index: 1;
  border-color: red;
}

.j-button-group .j-button:first-child {
  border-radius: 4px 0 0 4px;
}
.j-button-group .j-button:last-child {
  border-radius: 0 4px 4px 0;
}
</style>
