---
layout: doc
outline: deep
title: 介绍
titleTemplate: SeeYouUI - 介绍
description: SeeYouUI 组件库 介绍组件
iframeSrc: /pages/index/index
---

# 介绍

<div style="width: 160px; margin: 0 auto;">
  <img src="/logo.png" alt="SeeYouUI Logo" />

  <!-- 标题主文字：使用 vp-c-text-1 -->
  <div onclick="playSeeYouUI()" style="font-size: 24px; color: var(--vp-c-text-1); text-align: center; margin-top: 12px; font-weight: bold; cursor: pointer;">
    SeeYouUI 🔊
  </div>

  <div style="font-size: 12px; color: var(--vp-c-text-2); text-align: center; margin-top: 12px;">
    一个基于 uni-app 的组件库
  </div>

  <!-- 链接所在文字：vp-c-text-2 -->
  <div style="font-size: 12px; color: var(--vp-c-text-2); text-align: center;">
    要了解如何安装，参见
    <a href="/install" style="color: var(--vp-c-brand); text-decoration: none;">
      安装
    </a>
  </div>
</div>

## 特性

- 🧩 100+个组件（即将），希望让你少写点代码。
- 🔍 支持 TypeScript，提供完整的类型定义文件。
- 🔧 全链路开发和设计工具体系。
- 🔨 深入每个细节的主题定制能力。
- 🔑 完善的文档和示例，帮助您快速上手。

<!-- ## 预览

| App（vue）                                                                      | App（nvue）                                                                     | H5                                                                              | 微信小程序                                                                      |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <img src="/static/logo.png" alt="logo" style="display:block;margin:0 auto;" /> | <img src="/static/logo.png" alt="logo" style="display:block;margin:0 auto;" /> | <img src="/static/logo.png" alt="logo" style="display:block;margin:0 auto;" /> | <img src="/static/logo.png" alt="logo" style="display:block;margin:0 auto;" /> | -->

## 贡献

我们 **真诚、迫切、由衷地欢迎** 你提交任何形式的 [Pull Request](https://github.com/seeyouui/see-u-ui/pulls) 来一起完善 SeeYouUI 组件库。

无论是修个 typo、补一句注释、提个小优化，还是提交一个超棒的新功能——**都对我们来说无比重要**。
你的每一次贡献，真的都会让这个项目变得更好。

更多说明请参阅我们的 [贡献指南](./contributing.md) 🙏❤️

<!-- - 请确保您的 PR 符合 [贡献指南](https://github.com/see-u-ui/see-u-ui/blob/main/CONTRIBUTING.md)。 -->

## 社区

- QQ 一群：[792613113](https://qun.qq.com/universal-share/share?ac=1&authKey=P2tlNsOAS4mvQS0Q8V%2BdjBtgYusIkYXU7c63TgJab8l8%2BxZvwwga1kbJozS2gQC6&busi_data=eyJncm91cENvZGUiOiI3OTI2MTMxMTMiLCJ0b2tlbiI6IjVPK3pHUStkZVBNck5QMVFYRnRSZmlMeUlsZkVuVnZZemkxS25sOWFBT2pmeXFERFBQazUvTVZPRU5hbU0xT1YiLCJ1aW4iOiIxMjY1OTAzMTU5In0%3D&data=BIQGz4XNkPWHqdHMLLCiD-S9ZXFGmy1bACPq32ZzaJ8tWNRRXn5Mmw5ki6rR1ID-R7Azxu4wNHLl6eaLdeS7_w&svctype=4&tempid=h5_group_info)
- 钉钉一群：[160655009037](https://qr.dingtalk.com/action/joingroup?code=v1,k1,nVryX8WJ3cP/UkIbFU2KwhIdefjMJ5j1SEi6Y5bAC6k=&_dt_no_comment=1&origin=11)
- Discord 大群：[点击进入](https://discord.gg/c3KdbBZS)

## 许可

SeeYouUI 组件库 基于 [MIT 协议](https://opensource.org/license/MIT) 开源协议，意味着您无需支付任何费用，也无需授权，即可将 SeeYouUI 应用到您的产品中。

注意：这并不意味着您可以将 SeeYouUI 应用到非法的领域，比如涉及赌博，暴力等方面。如因此产生纠纷或法律问题，SeeYouUI 相关方不承担任何责任。

<script>
  if (typeof window !== 'undefined') {
    window.playSeeYouUI = function () {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance('See U U I');
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      utterance.pitch = 1;

      window.speechSynthesis.speak(utterance);
    };
  }
</script>
