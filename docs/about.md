---
layout: page
outline: deep
title: 关于我们
titleTemplate: SeeYouUI - 关于我们
description: SeeYouUI 组件库 关于我们
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/GmhLovEDM.png',
    name: 'GmhLovEDM',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/GmhLovEDM' },
      { icon: 'twitter', link: 'https://twitter.com/GmhLovEDM' }
    ]
  },
  {
    avatar: 'https://github.com/linlianger.png',
    name: 'linlianger',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/linlianger' },
    ]
  },
  {
    avatar: 'https://s3-alpha.figma.com/profile/a411755f-4400-464b-9c32-c37963834cf4',
    name: 'regou8',
    title: 'UI设计师',
    links: [
      { icon: 'figma', link: 'https://www.figma.com/@regou8' },
    ]
  },
]
</script>

<VPTeamPage style="margin-top: 0px;">
  <VPTeamPageTitle>
    <template #title>
      关于我们
    </template>
    <template #lead>
      SeeYouUI 的发展离不开贡献者们的支持
      <br />
      <span style="font-size: 14px;color: var(--vp-c-text-2);">
        想要贡献自己的力量吗？
        请查看<a href="/contributing" style="color: #42b983;">贡献指南</a>
      </span>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
