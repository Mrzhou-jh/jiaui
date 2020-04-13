<template>
  <button class="j-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <j-svg-icon :iconname="svgicon" v-if="svgicon && !loading"></j-svg-icon>
    <j-svg-icon iconname="jiazai" :loading="loading" v-if="loading"></j-svg-icon>
    <div class="btn-text"><slot>默认按钮</slot></div>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    svgicon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value == "left" && value == "rigth");
      }
    }
  }
};
</script>
<style scoped>
.j-button {
  display: inline-flex;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  height: 32px;
  font-size: 14px;
  padding: 0 1em;
  color: #333;
  border: 1px solid #999;
  border-radius: 4px;
  background-color: white;
  outline: none;
  margin-left: 1em;
}
.j-button:hover {
  color: #666;
}
.j-button:active {
  background-color: #eee;
}

.icon-right .svgicon {
  order: 2;
  margin-right: 0;
  margin-left: 0.2em;
}
.icon-right .btn-text {
  order: 1;
}
</style>
