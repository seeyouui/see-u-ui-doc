import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import Badge from "vitepress/dist/client/theme-default/components/VPBadge.vue";
import { useMermaidPanZoom } from "vitepress-plugin-mermaid-pan-zoom";
import "vitepress-plugin-mermaid-pan-zoom/dist/style.css";
import "./style.css"; // 如果有全局样式

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // ...
    app.component("Badge", Badge);
  },
  setup() {
    useMermaidPanZoom();
  },
} satisfies Theme;
