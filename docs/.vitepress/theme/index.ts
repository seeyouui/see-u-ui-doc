import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import Badge from "vitepress/dist/client/theme-default/components/VPBadge.vue";
import "./style.css"; // 如果有全局样式

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // ...
    app.component("Badge", Badge);
  },
} satisfies Theme;
