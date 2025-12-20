---
layout: page
outline: deep
title: About Us
titleTemplate: SeeYouUI - About Us
description: SeeYouUI Component Library About Us
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
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/GmhLovEDM' },
      { icon: 'twitter', link: 'https://twitter.com/GmhLovEDM' }
    ]
  },
  {
    avatar: 'https://github.com/linlianger.png',
    name: 'linlianger',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/linlianger' },
    ]
  },
  {
    avatar: 'https://s3-alpha.figma.com/profile/a411755f-4400-464b-9c32-c37963834cf4',
    name: 'regou8',
    title: 'UI Designer',
    links: [
      { icon: 'figma', link: 'https://www.figma.com/@regou8' },
    ]
  },
]
</script>

<VPTeamPage style="margin-top: 0px;">
  <VPTeamPageTitle>
    <template #title>
      About Us
    </template>
    <template #lead>
      The development of SeeYouUI would not be possible without the support of our contributors.
      <br />
      <span style="font-size: 14px;color: var(--vp-c-text-2);">
        Want to contribute?
        Please check the <a href="/contributing" style="color: #42b983;">Contribution Guide</a>
      </span>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>