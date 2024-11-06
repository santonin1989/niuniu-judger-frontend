<template>
  <div class="developer-profile">
    <div class="info">
      <div
        @mouseenter="handleMouseEnter"
        @mousemove="handleMouseMove"
        @click="toGitHub"
        class="avatar-name"
      >
        <img :src="avatar" alt="avatar" />
        <div class="name">Xiao Shuai</div>
        <div
          :style="`transform: translate(${tipsPosition.x + 10}px, ${tipsPosition.y - 20}px);`"
          class="tips"
        >
          前往GitHub主页
        </div>
      </div>
      <div class="self-intro">
        我是个人介绍我是个人介绍我是个人介绍我是个人介绍我是个人介绍我是个人介绍
      </div>
    </div>
    <div class="personal-data-display">
      <div v-for="item in personalData" :key="item.title" class="data-item">
        <div class="data-title">{{ item.title }}</div>
        <div class="data-value">{{ item.value }}</div>
        <div v-if="item.fullname" class="data-desc">{{ item.fullname }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import avatar from '/avatar.png'
import { formatBigNumber } from '@/utils/formatNumber'

const personalData = [
  {
    title: 'Nation',
    value: 'China',
  },
  {
    title: 'Talent Rank',
    value: 'A',
  },
  {
    title: 'Followers',
    value: formatBigNumber(12000),
  },
  {
    title: 'Star',
    value: formatBigNumber(2400),
  },
  {
    title: 'Repo.',
    value: formatBigNumber(36),
    fullname: 'Repository',
  },
]

const toGitHub = () => {
  window.open('https://github.com')
}

const tipsPosition = ref({ x: 0, y: 0 })
const handleMouseEnter = (event: MouseEvent) => {
  const { layerX, layerY } = event
  tipsPosition.value = { x: layerX, y: layerY }
}
const handleMouseMove = (event: MouseEvent) => {
  const { layerX, layerY } = event
  tipsPosition.value = { x: layerX, y: layerY }
}
</script>

<style scoped lang="less">
.developer-profile {
  width: 100%;

  .info {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;

    .avatar-name {
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      user-select: none;

      .name {
        font-size: 1.8rem;
        color: white;
      }

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        object-fit: cover;
      }

      .tips {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--color-theme);
        color: var(--color-background);
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        height: 2rem;
        border-radius: 0.5rem;
        opacity: 0;
        transition:
          transform 100ms,
          opacity 200ms;
      }

      &:hover .tips {
        opacity: 1;
      }
    }

    .self-intro {
      width: 72%;
      max-width: 460px;
    }
  }
}

.personal-data-display {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;

  .data-item {
    flex-basis: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 0.5rem;
    position: relative;
    user-select: none;

    .data-title {
      white-space: nowrap;
      font-size: 0.9rem;
      font-weight: lighter;
    }

    .data-value {
      font-size: 1.3rem;
      color: var(--color-theme);
    }

    .data-desc {
      position: absolute;
      background-color: var(--color-background-half);
      border-radius: 0.5rem;
      padding: 0.8rem;
      white-space: nowrap;
      -webkit-backdrop-filter: var(--blur);
      backdrop-filter: var(--blur);
      top: -4px;
      transform: translateY(-100%);
      color: white;
      display: none;
    }

    &:hover {
      .data-desc {
        display: block;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
