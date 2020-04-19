module.exports = {
  title: "Simple UI",
  base: "/simple-ui/",
  description: "Vue简单易用UI框架",
  themeConfig: {
    //配置导航栏logo
    logo: "/logo.jpg",
    smoothScroll: true,
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/home/" },
      { text: "关于", link: "/about/" },
      { text: "GitHub", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "开始体验", // 必要的
        //path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: ["/about/", "/get-started/"],
      },
      {
        title: "组件",
        children: [
          /* ... */
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true, //代码块显示行号
  },
};
