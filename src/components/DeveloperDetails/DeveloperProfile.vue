<template>
  <div class="developer-profile">
    <div class="info">
      <div class="avatar-name">
        <img :src="avatar" alt="avatar" />
        <div class="name">Xiao Shuai</div>
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
import avatar from '/avatar.png'

const personalData = [
  {
    title: 'Nation',
    value: 'China',
  },
  {
    title: 'Talent Rank',
    value: '92',
  },
  {
    title: 'Followers',
    value: '12K',
  },
  {
    title: 'Star',
    value: '2.4K',
  },
  {
    title: 'Repo.',
    value: '36',
    fullname: 'Repository',
  },
]
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
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;

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
