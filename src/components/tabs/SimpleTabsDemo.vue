<template>
  <div>
    <s-tabs selected="1">
      <s-tabsHead>
        <s-tabsItem name="1">tab1</s-tabsItem>
        <s-tabsItem name="2">tab2</s-tabsItem>
        <s-tabsItem name="3">tab3</s-tabsItem>
      </s-tabsHead>
      <s-tabsBody>
        <s-tabsPane name="1">content1</s-tabsPane>
        <s-tabsPane name="2">content2</s-tabsPane>
        <s-tabsPane name="3">content3</s-tabsPane>
      </s-tabsBody>
    </s-tabs>
  </div>
</template>

<script>
import STabs from "@components/tabs/SimpleTabs";
import STabsHead from "@components/tabs/SimpleTabsHead";
import STabsItem from "@components/tabs/SimpleTabsItem";
import STabsBody from "@components/tabs/SimpleTabsBody";
import STabsPane from "@components/tabs/SimpleTabsPane";

export default {
  name: "SimpleTabsDemo",
  components: {
    STabs,
    STabsHead,
    STabsItem,
    STabsBody,
    STabsPane
  }
};
</script>

<style>
</style>