import { defineConfig } from "vitepress";
import { commonSidebar, apiSidebar } from "./sidebar";
import { commonSidebarEn, apiSidebarEn } from "./sidebar_en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "SeeYouUI 组件库 - 基于 uni-app(vue3) 的高质量 UI 框架",
  description:
    "SeeYouUI 是一个基于 uni-app 的高质量组件库，使用 TypeScript 开发，提供丰富组件与工具函数，帮助你快速构建跨平台应用。",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://www.seeuui.cn",
  },

  // 多语言配置 (Locales)
  // 这里配置了 root (中文) 和 en (英文) 的具体差异
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      // 中文特定配置
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "组件", link: "/components/button" },
          { text: "API", link: "/api/" }, // 修正：建议加上尾部斜杠
          { text: "贡献指南", link: "/contributing" },
          { text: "关于我们", link: "/about" },
        ],
        sidebar: {
          "/": commonSidebar,
          "/components/": commonSidebar,
          "/api/": apiSidebar,
        },
        footer: {
          message: "辽 ICP 备 2025070134 号",
          copyright: "© SeeYouUI · 基于 uni-app 的开源 UI 组件库 · MIT License",
        },
        // 中文界面文案
        outline: {
          label: "页面导航",
        },
        returnToTopLabel: "返回顶部",
        lastUpdated: {
          text: "最后更新于",
        },
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
        editLink: {
          pattern: ({ filePath }) => {
            if (filePath.startsWith("packages/")) {
              return `https://github.com/seeyouui/see-u-ui-doc/tree/main/docs/${filePath}`;
            } else {
              return `https://github.com/seeyouui/see-u-ui-doc/tree/main/docs/${filePath}`;
            }
          },
          text: "在 GitHub 上编辑此页面",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/", // 对应 docs/en/ 目录
      title: "SeeYouUI - High Quality UI Framework based on uni-app (Vue3)",
      description:
        "SeeYouUI is a high-quality component library based on uni-app, developed with TypeScript, providing rich components to help you build cross-platform apps.",
      // 英文特定配置
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Components", link: "/en/components/button" },
          { text: "API", link: "/en/api/" },
          { text: "Contributing", link: "/en/contributing" },
          { text: "About", link: "/en/about" },
        ],
        sidebar: {
          "/en/": commonSidebarEn,
          "/en/components/": commonSidebarEn,
          "/en/api/": apiSidebarEn,
        },
        footer: {
          message: "Liao ICP No. 2025070134",
          copyright:
            "© SeeYouUI · Open Source UI Library based on uni-app · MIT License",
        },
        // 英文界面文案
        outline: {
          label: "On this page",
        },
        returnToTopLabel: "Return to top",
        lastUpdated: {
          text: "Last updated",
        },
        docFooter: {
          prev: "Previous page",
          next: "Next page",
        },
        editLink: {
          pattern: ({ filePath }) => {
            // 注意：英文文档通常在 docs/en/ 下，这里路径逻辑可能需要根据你的文件结构微调
            return `https://github.com/seeyouui/see-u-ui-doc/tree/main/docs/${filePath}`;
          },
          text: "Edit this page on GitHub",
        },
      },
    },
  },

  // 头配置
  head: [
    [
      "link",
      {
        rel: "preconnect",
        href: "https://demo.seeuui.cn",
        crossorigin: "",
      },
    ],
    // favicon
    [
      "link",
      {
        rel: "icon",
        href: "https://www.seeuui.cn/logo.png",
        sizes: "any",
      },
    ],
    // google logo
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://www.seeuui.cn/logo-512.png",
        sizes: "512x512",
      },
    ],
    // ios logo
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "https://www.seeuui.cn/logo-512.png",
      },
    ],

    // 多语言配置
    [
      "link",
      { rel: "alternate", hreflang: "zh-CN", href: "https://www.seeuui.cn/" },
    ],
    [
      "link",
      { rel: "alternate", hreflang: "zh-HK", href: "https://www.seeuui.cn/" },
    ],
    [
      "link",
      { rel: "alternate", hreflang: "en", href: "https://www.seeuui.cn/en/" },
    ],
    [
      "link",
      {
        rel: "alternate",
        hreflang: "x-default",
        href: "https://www.seeuui.cn/",
      },
    ],

    // 百度SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "SeeYouUI, see-u-ui, seeuui, uni-app 组件库, uniapp 组件, 跨平台 UI 组件, TypeScript 组件库",
      },
    ],

    // 百度统计脚本
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b0c2a2ab7c7842d9ecaaeec1022b8512";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],

    // Schema 标记
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.seeuui.cn/#organization",
        name: "SeeYouUI",
        url: "https://www.seeuui.cn/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.seeuui.cn/logo-512.png",
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://github.com/seeyouui/see-u-ui",
          "https://www.npmjs.com/package/see-u-ui",
          "https://twitter.com/GmhLovEDM",
          "https://discord.gg/c3KdbBZS",
        ],
      }),
    ],
  ],

  markdown: {
    config: (md) => {
      // 1. 保存原有的 fence 渲染规则
      const defaultFence =
        md.renderer.rules.fence ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options);
        };

      // 2. 覆盖 fence 渲染规则
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const info = token.info.trim(); // 获取代码块语言，例如 "mermaid"

        if (info === "mermaid") {
          // 3. 如果是 mermaid 代码块，直接返回一个 div，不进行服务端渲染
          // 注意：这里我们把原始代码放入 div 中，不做任何处理
          return `<pre class="mermaid" v-pre>${token.content}</pre>`;
        }

        // 4. 其他语言代码块，使用默认渲染
        return defaultFence(tokens, idx, options, env, self);
      };
    },
  },

  // 共享的主题配置 (不随语言变化，或内部处理了多语言的配置)
  themeConfig: {
    siteTitle: "SeeYouUI",

    logo: { src: "/logo.png", alt: "SeeYouUI Logo" },

    // 搜索配置：VitePress 支持在内部定义 locales
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
          // 英文搜索翻译
          en: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search docs",
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Clear search",
                footer: {
                  selectText: "Select",
                  navigateText: "Navigate",
                  closeText: "Close",
                },
              },
            },
          },
        },
      },
    },

    // 社交链接 (通常全站通用)
    socialLinks: [
      { icon: "github", link: "https://github.com/seeyouui/see-u-ui" },
      { icon: "twitter", link: "https://twitter.com/GmhLovEDM" },
      { icon: "discord", link: "https://discord.gg/c3KdbBZS" },
      { icon: "npm", link: "https://www.npmjs.com/package/see-u-ui" },
    ],
  },
});
