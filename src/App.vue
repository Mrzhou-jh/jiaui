<template>
  <div>
    <div class="all">
      <s-button>按钮</s-button>
      <s-button colortheme="primary">按钮</s-button>
      <s-button colortheme="success">按钮</s-button>
      <s-button colortheme="info">按钮</s-button>
      <s-button colortheme="warning">按钮</s-button>
      <s-button colortheme="danger">按钮</s-button>
    </div>
    <div class="all">
      <s-button plain>按钮</s-button>
      <s-button plain colortheme="primary">按钮</s-button>
      <s-button plain colortheme="success">按钮</s-button>
      <s-button plain colortheme="info">按钮</s-button>
      <s-button plain colortheme="warning">按钮</s-button>
      <s-button plain colortheme="danger">按钮</s-button>
    </div>
    <div class="all">
      <s-button round>按钮</s-button>
      <s-button round colortheme="primary">按钮</s-button>
      <s-button round colortheme="success">按钮</s-button>
      <s-button round colortheme="info">按钮</s-button>
      <s-button round colortheme="warning">按钮</s-button>
      <s-button round colortheme="danger">按钮</s-button>
    </div>
    <div class="all">
      <s-button disabled>按钮</s-button>
      <s-button disabled colortheme="primary">按钮</s-button>
      <s-button disabled colortheme="success">按钮</s-button>
      <s-button disabled colortheme="info">按钮</s-button>
      <s-button disabled colortheme="warning">按钮</s-button>
      <s-button disabled colortheme="danger">按钮</s-button>
    </div>

    <div class="all">
      <s-button>按钮</s-button>
      <s-button svgicon="shezhi" iconPosition="right" colortheme="primary">设置</s-button>
      <s-button svgicon="zan" colortheme="success">点赞</s-button>
      <s-button svgicon="jiazai" iconPosition="right" :loading="true" colortheme="info">加载</s-button>
      <s-button
        svgicon="shangchuan"
        iconPosition="right"
        @click="loading = !loading"
        :loading="loading"
        colortheme="warning"
      >加载</s-button>
      <s-button
        svgicon="xiazai"
        :loading="loading2"
        @click="loading2 = !loading2"
        colortheme="danger"
      >下载</s-button>
    </div>

    <s-button-group>
      <s-button svgicon="zuojiantou" iconPosition="left" colortheme="primary">上一页</s-button>
      <s-button colortheme="primary">更多</s-button>
      <s-button svgicon="youjiantou" iconPosition="right" colortheme="primary">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="zuojiantou" iconPosition="left" colortheme="success">上一页</s-button>
      <s-button colortheme="success">更多</s-button>
      <s-button svgicon="youjiantou" iconPosition="right" colortheme="success">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="zuojiantou" iconPosition="left" colortheme="info">上一页</s-button>
      <s-button colortheme="info">更多</s-button>
      <s-button svgicon="youjiantou" iconPosition="right" colortheme="info">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="zuojiantou" iconPosition="left" colortheme="warning">上一页</s-button>
      <s-button colortheme="warning">更多</s-button>
      <s-button svgicon="youjiantou" iconPosition="right" colortheme="warning">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="zuojiantou" iconPosition="left" colortheme="danger">上一页</s-button>
      <s-button colortheme="danger">更多</s-button>
      <s-button svgicon="youjiantou" iconPosition="right" colortheme="danger">下一页</s-button>
    </s-button-group>

    <s-input placeholder></s-input>
    <s-input placeholder="输入提示"></s-input>
    <s-input value="默认文本"></s-input>
    <s-input value="小1" err="用户名不足两个汉字"></s-input>
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

<style>
.all {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>
