<template>
  <div v-if="info" class="developer-profile">
    <div class="info">
      <div
        @mouseenter="handleMouseEnter"
        @mousemove="handleMouseMove"
        @click="toGitHub"
        class="avatar-name"
      >
        <img :src="info.avatarUrl ?? avatar" alt="avatar" />
        <div class="name">{{ info.username }}</div>
        <div
          :style="`transform: translate(${tipsPosition.x + 10}px, ${tipsPosition.y - 20}px);`"
          class="tips"
        >
          前往GitHub主页
        </div>
      </div>
      <div class="self-intro">
        {{ info.bio }}
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
  <div v-else class="no-comment">
    <NiuniuLoading />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import avatar from '/avatar.png'
import { formatBigNumber } from '@/utils/formatNumber'
import type { DeveloperDTO } from '@/types/DTO'
import NiuniuLoading from '../NiuniuLoading.vue'

const props = defineProps<{
  info: DeveloperDTO
}>()

// const personalData = ref([
//   {
//     title: 'Nation',
//     value: 'China',
//   },
//   {
//     title: 'Talent Rank',
//     value: 'A',
//   },
//   {
//     title: 'Followers',
//     value: formatBigNumber(12000),
//   },
//   {
//     title: 'Star',
//     value: formatBigNumber(2400),
//   },
//   {
//     title: 'Repo.',
//     value: formatBigNumber(36),
//     fullname: 'Repository',
//   },
// ])

const personalData = computed(() => {
  const data = props.info
  return [
    {
      title: 'Nation',
      value: data.nation,
      fullname: undefined,
    },
    {
      title: 'Talent Rank',
      value: data.talentRank.toFixed(2),
    },
    {
      title: 'Domain',
      value:
        data.domain === '' || data.domain === null
          ? 'N/A'
          : longToShort(data.domain),
      fullname: data.domain,
    },
    {
      title: 'Followers',
      value: formatBigNumber(data.followersCount),
    },
    {
      title: 'Location',
      value: data.location === '' ? 'N/A' : data.location,
    },
    {
      title: 'Repository',
      value: formatBigNumber(data.publicRepos),
    },
  ]
})

const toGitHub = () => {
  window.open(props.info.profileUrl as string)
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

const longToShort = (str: string) => {
  if (str.length > 10) {
    return str.slice(0, 10) + '...'
  }
  return str
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
      display: flex;
      max-width: 72%;
    }
  }
}

.personal-data-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
  row-gap: 1rem;

  .data-item {
    flex-basis: 30%;
    min-width: 100px;
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
      white-space: nowrap;
      font-size: 1.3rem;
      color: var(--color-theme);
    }

    .data-desc {
      max-width: 5rem;
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
