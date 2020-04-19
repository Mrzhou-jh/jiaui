# 快速上手

::: danger
该项目为自我学习提升项目，目前还在持续开发中，请不要使用在生产环境中。
:::

## :inbox_tray: 下载安装

```sh
npm install simple-ui

#or

yarn add simple-ui
```

## :computer: 开始使用

### :hammer: 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*，*::before,
*::after {
  box-sizing: border-box;
}
```

IE 8 及以上浏览器支持此样式。

### :hammer: 引入 simple-ui   :keyboard: :wrench: :bookmark_tabs: :scroll: :clipboard: :pushpin:

```js
import { Button } from "simple-ui";
import Vue from "vue";

new Vue({
  el: "#app",
  components: {
    "s-button": Button,
  },
});
```
