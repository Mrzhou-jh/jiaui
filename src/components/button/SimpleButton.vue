<template>
  <button
    :class="['s-button',colortheme,{ [`icon-${iconPosition}`]:true,'round': round, 'plain': plain, 'disabled': disabled}]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <s-svg-icon :iconname="svgicon" v-if="svgicon && !loading"></s-svg-icon>
    <s-svg-icon iconname="jiazai" :loading="loading" v-if="loading"></s-svg-icon>
    <div class="btn-text">
      <slot>默认按钮</slot>
    </div>
  </button>
</template>
<script>
export default {
  name: "SButton",
  props: {
    colortheme: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
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
<style lang="scss" scoped>
$primary: #409eff;
$success: #67c23a;
$info: #909399;
$warning: #e6a23c;
$danger: #f56c6c;
@mixin primary {
  background-color: $primary;
  border-color: $primary;
  color: #fff;
}
@mixin success {
  color: #fff;
  background-color: $success;
  border-color: $success;
}
@mixin info {
  color: #fff;
  background-color: $info;
  border-color: $info;
}
@mixin warning {
  color: #fff;
  background-color: $warning;
  border-color: $warning;
}
@mixin danger {
  color: #fff;
  background-color: $danger;
  border-color: $danger;
}
/*按钮默认样式*/
.s-button {
  display: inline-flex;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  height: 32px;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 0 1em;
  font-size: 14px;
  border-radius: 4px;

  &:focus,
  &:hover {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
/* PRIMARY STYLE */
.primary {
  @include primary;
  &:focus,
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  .svgicon {
    fill: #fff;
  }
  &.plain {
    color: $primary;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }

  &.plain {
    &:focus,
    &:hover {
      @include primary;
    }
  }
}
.success {
  @include success;

  &:focus,
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  .svgicon {
    fill: #fff;
  }
  &.plain {
    color: $success;
    background: #f0f9eb;
    border-color: #c2e7b0;
    .svgicon {
      fill: $success;
    }
    &:focus,
    &:hover {
      @include success;
    }
  }
}

.info {
  @include info;

  &:focus,
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  .svgicon {
    fill: #fff;
  }
  &.plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    .svgicon {
      fill: #909399;
    }
    &:focus,
    &:hover {
      @include info;
    }
  }
}

/*  WARNING STYLE*/
.warning {
  @include warning;

  &:focus,
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  .svgicon {
    fill: #fff;
  }
  /*  PLAIN WARNING STYLE*/
  &.plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    .svgicon {
      fill: #e6a23c;
    }
    &:focus,
    &:hover {
      @include warning;
    }
  }
}

/*  DANGER STYLE*/
.danger {
  @include danger;

  &:focus,
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  .svgicon {
    fill: #fff;
  }
  /*  PLAIN DANGER STYLE*/
  &.plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    .svgicon {
      fill: #f56c6c;
    }
    &:focus,
    &:hover {
      @include danger;
    }
  }
}

/*  PLAIN STYLE*/
.plain:focus,
.plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;

  .svgicon {
    fill: #409eff;
  }
}

/*  ROUND */
.round {
  border-radius: 20px;
  padding: 0 1em;
}

/*  DISABLE BUTTON*/
.s-button.disabled {
  &,
  &:focus,
  &:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  .svgicon {
    fill: #c0c4cc;
  }
}
// .s-button:hover {
//   color: #666;
// }
// .s-button:active {
//   background-color: #eee;
// }

.icon-right .svgicon {
  order: 2;
  margin-right: 0;
  margin-left: 0.2em;
}
.icon-right .btn-text {
  order: 1;
}
</style>
