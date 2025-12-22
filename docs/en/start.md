---
layout: doc
outline: deep
title: Introduction
titleTemplate: SeeYouUI - Introduction
description: SeeYouUI Component Library Introduction
iframeSrc: /pages/index/index
---

# Introduction

<div style="width: 160px; margin: 0 auto;">
  <img src="/logo.png" alt="SeeYouUI Logo" />

  <div onclick="playSeeYouUI()" style="font-size: 24px; color: var(--vp-c-text-1); text-align: center; margin-top: 12px; font-weight: bold; cursor: pointer;">
    SeeYouUI 🔊
  </div>

  <div style="font-size: 12px; color: var(--vp-c-text-2); text-align: center; margin-top: 12px;">
    A Component Library based on uni-app
  </div>

  <div style="font-size: 12px; color: var(--vp-c-text-2); text-align: center;">
    To learn how to install,see 
    <a href="/en/install" style="color: var(--vp-c-brand); text-decoration: none;">
      Installation
    </a>
  </div>

</div>

## Features

- 🧩 100+ Components (Coming soon), hoping to help you write less code.
- 🔍 Supports TypeScript, providing complete type definition files.
- 🔧 Full-link development and design tool system.
- 🔨 Theme customization capabilities deep into every detail.
- 🔑 Comprehensive documentation and examples to help you get started quickly.

## Contributing

We **sincerely, urgently, and wholeheartedly welcome** you to submit [Pull Requests](https://github.com/seeyouui/see-u-ui/pulls) in any form to jointly improve the SeeYouUI Component Library.

Whether it's fixing a typo, adding a comment, proposing a small optimization, or submitting an amazing new feature—**it is all incredibly important to us**.
Every contribution you make genuinely helps this project become better.

For more details, please refer to our [Contributing Guide]() 🙏❤️

## Community

- QQ Group 1: [792613113](https://qun.qq.com/universal-share/share?ac=1&authKey=P2tlNsOAS4mvQS0Q8V%2BdjBtgYusIkYXU7c63TgJab8l8%2BxZvwwga1kbJozS2gQC6&busi_data=eyJncm91cENvZGUiOiI3OTI2MTMxMTMiLCJ0b2tlbiI6IjVPK3pHUStkZVBNck5QMVFYRnRSZmlMeUlsZkVuVnZZemkxS25sOWFBT2pmeXFERFBQazUvTVZPRU5hbU0xT1YiLCJ1aW4iOiIxMjY1OTAzMTU5In0%3D&data=BIQGz4XNkPWHqdHMLLCiD-S9ZXFGmy1bACPq32ZzaJ8tWNRRXn5Mmw5ki6rR1ID-R7Azxu4wNHLl5eaLdeS7_w&svctype=4&tempid=h5_group_info)
- DingTalk Group 1: [160655009037](https://qr.dingtalk.com/action/joingroup?code=v1,k1,nVryX8WJ3cP/UkIbFU2KwhIdefjMJ5j1SEi6Y5bAC6k=&_dt_no_comment=1&origin=11)
- Discord Group: [Click to Join](https://discord.gg/c3KdbBZS)

## License

The SeeYouUI Component Library is open-sourced based on the [MIT License](https://opensource.org/license/MIT), meaning you can use SeeYouUI in your product without paying any fees or requiring authorization.

**Note**: This does not mean you can apply SeeYouUI to illegal fields, such as those involving gambling, violence, etc. SeeYouUI-related parties assume no responsibility for disputes or legal issues arising therefrom.

<script>
  window.playSeeYouUI = function () {
    // 防止多次叠加播放
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance('See U UI');
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }
</script>
