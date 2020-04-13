<template>
  <div>
    <j-button>按钮</j-button>
    <j-button svgicon="shezhi" iconPosition="right">设置</j-button>
    <j-button svgicon="zan">点赞</j-button>
    <j-button svgicon="jiazai" iconPosition="right" :loading="true">加载</j-button>
    <j-button svgicon="shangchuan" iconPosition="right" @click="loading = !loading" :loading="loading">加载</j-button>
    <j-button svgicon="xiazai" :loading="loading2" @click="loading2 = !loading2">下载</j-button>
    <j-button-group>
      <j-button svgicon="zuojiantou" iconPosition="left">上一页</j-button>
      <j-button>更多</j-button>
      <j-button svgicon="youjiantou" iconPosition="right">下一页</j-button>
    </j-button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { loading: false, loading2: false };
  }
};
</script>

<style></style>
