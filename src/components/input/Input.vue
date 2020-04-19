<template>
  <div class="wrapper">
    <input type="text" :placeholder="placeholder" :value="value" />
    <template v-if="err">
      <s-svg-icon :class="{ err: err }" iconname="jinggao"></s-svg-icon
      ><span :class="{ err: err }">{{ err }}</span></template
    >
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    err: {
      type: String
    }
  }
};
</script>
<style scoped>
.wrapper input {
  margin-top: 2em;
  margin-left: 1em;
  height: 32px;
  border: 1px solid #999;
  font-size: 14px;
  padding-left: 0.5em;
  outline: none;
}
.wrapper input:hover {
  border-color: #666;
}
.wrapper input:active {
  background-color: #eee;
}
.wrapper input:focus {
  box-shadow: 0 1px 3px inset;
}
.err {
  fill: red;
  color: red;
  font-size: 14px;
  vertical-align: middle;
  margin-left: 0.5em;
}
</style>
