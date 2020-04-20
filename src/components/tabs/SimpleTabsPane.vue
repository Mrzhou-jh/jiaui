<template>
  <div class="tabs-pane" @click="changePane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimpleTabsPane",
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
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", vm => {
     
      this.active = vm.name === this.name;
    });
  },
  methods: {
    changePane() {
      this.eventBus.$emit("update:selected", vm);
    }
  }
};
</script>

<style></style>
