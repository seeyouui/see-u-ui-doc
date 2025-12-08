import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "SeeYouUI",
  description: "SeeYouUI,是全面兼容nvue的uni-app生态框架",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/static/logo.png" }]],

  themeConfig: {
    logo: "/static/logo.png",

    outline: {
      label: "页面导航",
    },

    returnToTopLabel: "返回顶部",

    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2025-至今 GmhLovEDM",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "未找到相关结果",
                resetButtonTitle: "清除搜索",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },

    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith("packages/")) {
          return `https://github.com/GmhLovEDM/SeeYouUIDoc/tree/main/docs/${filePath}`;
        } else {
          return `https://github.com/GmhLovEDM/SeeYouUIDoc/tree/main/docs/${filePath}`;
        }
      },
      text: "在 GitHub 上编辑此页面",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button" },
      { text: "贡献指南", link: "/contributing" },
      { text: "关于我们", link: "/about" },
    ],

    sidebar: [
      {
        text: "SeeYouUI",
        items: [
          { text: "介绍", link: "/start" },
          { text: "安装", link: "/install" },
          { text: "配置", link: "/config" },
          { text: "快速上手", link: "/quick-start" },
          { text: "注意事项", link: "/precautions" },
          { text: "更新日志", link: "/update-log" },
        ],
      },
      {
        text: "组件",
        items: [
          {
            text: "基础组件",
            items: [
              { text: "Color 色彩", link: "/components/color/index.md" },
              { text: "Button 按钮", link: "/components/button/index.md" },
              { text: "Text 文本", link: "/components/text/index.md" },
              { text: "Link 链接", link: "/components/link/index.md" },
              { text: "Icon 图标", link: "/components/todo/index.md" },
              { text: "Image 图片", link: "/components/todo/index.md" },
              { text: "Badge 徽标数", link: "/components/todo/index.md" },
              { text: "Tag 标签", link: "/components/todo/index.md" },
            ],
          },
          {
            text: "表单组件",
            items: [
              { text: "Form 表单", link: "/components/todo/index.md" },
              { text: "Input 输入框", link: "/components/todo/index.md" },
              { text: "Keyboard 键盘", link: "/components/todo/index.md" },
              {
                text: "Select 经典下拉框",
                link: "/components/todo/index.md",
              },
              { text: "Picker 选择器", link: "/components/todo/index.md" },
              {
                text: "Cascader 级联选择器",
                link: "/components/todo/index.md",
              },
              {
                text: "DatetimePicker 选择器",
                link: "/components/todo/index.md",
              },
              { text: "Rate 评分", link: "/components/todo/index.md" },
              { text: "Search 搜索", link: "/components/todo/index.md" },
              { text: "NumberBox 步进器", link: "/components/todo/index.md" },
              { text: "Upload 上传", link: "/components/todo/index.md" },
              {
                text: "Code 验证码输入框",
                link: "/components/todo/index.md",
              },
              { text: "Textarea 文本域", link: "/components/todo/index.md" },
              { text: "Checkbox 复选框", link: "/components/todo/index.md" },
              { text: "Radio 单选框", link: "/components/todo/index.md" },
              {
                text: "Switch 开关选择器",
                link: "/components/todo/index.md",
              },
              {
                text: "Slider 滑动选择器",
                link: "/components/todo/index.md",
              },
            ],
          },
          {
            text: "布局组件",
            items: [
              { text: "Layout 布局", link: "/components/todo/index.md" },
              { text: "Cell 单元格", link: "/components/todo/index.md" },
              {
                text: "LoadingIcon 加载动画",
                link: "/components/todo/index.md",
              },
              {
                text: "LoadingPage 加载页",
                link: "/components/todo/index.md",
              },
              {
                text: "ScrollList 横向滚动列表",
                link: "/components/todo/index.md",
              },
              { text: "Line 线条", link: "/components/todo/index.md" },
              { text: "Card 卡片", link: "/components/todo/index.md" },
              { text: "Overlay 遮罩层", link: "/components/todo/index.md" },
              {
                text: "NoNetwork 无网络提示",
                link: "/components/todo/index.md",
              },
              { text: "Grid 宫格布局", link: "/components/todo/index.md" },
              { text: "Swiper 轮播图", link: "/components/todo/index.md" },
              { text: "Skeleton 骨架屏", link: "/components/todo/index.md" },
              { text: "Sticky 吸顶", link: "/components/todo/index.md" },
              { text: "Waterfall 瀑布流", link: "/components/todo/index.md" },
              { text: "Box 盒子", link: "/components/todo/index.md" },
            ],
          },
          {
            text: "数据组件",
            items: [
              { text: "List 列表", link: "/components/todo/index.md" },
              {
                text: "VirtualList 虚拟列表",
                link: "/components/todo/index.md",
              },
              {
                text: "LineProgress 线形进度条",
                link: "/components/todo/index.md",
              },
              { text: "Table 表格", link: "/components/todo/index.md" },
              { text: "CountDown 倒计时", link: "/components/todo/index.md" },
              { text: "CountTo 数字滚动", link: "/components/todo/index.md" },
            ],
          },
          {
            text: "反馈组件",
            items: [
              { text: "Tooltip 长按提示", link: "/components/todo/index.md" },
              { text: "Popover 弹窗提示", link: "/components/todo/index.md" },
              {
                text: "ActionSheet 操作菜单",
                link: "/components/todo/index.md",
              },
              { text: "Alert 警告提示", link: "/components/todo/index.md" },
              { text: "Toast 消息提示", link: "/components/todo/index.md" },
              {
                text: "NoticeBar 滚动通知",
                link: "/components/todo/index.md",
              },
              { text: "Notify 消息提示", link: "/components/todo/index.md" },
              {
                text: "SwipeAction 滑动单元格",
                link: "/components/todo/index.md",
              },
              {
                text: "Collapse 折叠面板",
                link: "/components/todo/index.md",
              },
              { text: "Popup 弹出层", link: "/components/todo/index.md" },
              { text: "Modal 模态框", link: "/components/todo/index.md" },
              { text: "Copy 复制", link: "/components/todo/index.md" },
            ],
          },
          {
            text: "导航组件",
            items: [
              {
                text: "Dropdown 下拉菜单",
                link: "/components/todo/index.md",
              },
              {
                text: "Tabbar 底部导航栏",
                link: "/components/todo/index.md",
              },
              { text: "BackTop 返回顶部", link: "/components/todo/index.md" },
              {
                text: "Navbar 自定义导航栏",
                link: "/components/todo/index.md",
              },
              {
                text: "NavbarMini 迷你导航栏",
                link: "/components/todo/index.md",
              },
              { text: "Tabs 标签", link: "/components/todo/index.md" },
              {
                text: "Subsection 分段器",
                link: "/components/todo/index.md",
              },
              {
                text: "IndexList 索引列表",
                link: "/components/todo/index.md",
              },
              { text: "Steps 步骤条", link: "/components/todo/index.md" },
              { text: "Empty 内容为空", link: "/components/todo/index.md" },
              {
                text: "Pagination 分页器",
                link: "/components/todo/index.md",
              },
              { text: "Tree 树形组件", link: "/components/todo/index.md" },
              {
                text: "CityLocate 城市定位选择",
                link: "/components/todo/index.md",
              },
            ],
          },
          {
            text: "导航组件",
            items: [
              {
                text: "Parse 富文本解析器",
                link: "/components/todo/index.md",
              },
              {
                text: "Markdown 文本解析",
                link: "/components/todo/index.md",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/GmhLovEDM/SeeYouUI" },
      { icon: "twitter", link: "https://twitter.com/GmhLovEDM" },
      { icon: "discord", link: "https://discord.gg" },
      { icon: "npm", link: "https://www.npmjs.com/package/see-u-ui" },
    ],

    lastUpdated: {
      text: "最后更新于",
    },
  },
});
