<template>
  <div class="developer-view">
    <div class="developer-view-container">
      <div class="btn-group">
        <img :src="backIcon" @click="navigateBack" />
        <img :src="homeIcon" @click="navigateHome" />
      </div>
      <!-- 开发者档案 -->
      <DeveloperProfile class="developer-details" />
      <!-- 分割线 -->
      <div class="separator"></div>
      <!-- 开发者评价 -->
      <DeveloperEvaluation class="developer-evaluation" />
      <!-- 分割线 -->
      <div class="separator"></div>
      <!-- 热门仓库 -->
      <PopularRepo />
    </div>
  </div>
</template>

<script setup lang="ts">
import DeveloperEvaluation from '@/components/DeveloperDetails/DeveloperEvaluation.vue'
import DeveloperProfile from '@/components/DeveloperDetails/DeveloperProfile.vue'
import PopularRepo from '@/components/DeveloperDetails/PopularRepo.vue'
import backIcon from '@/components/icons/back.svg'
import homeIcon from '@/components/icons/home.svg'
import { useRouter } from 'vue-router'

const router = useRouter()
const navigateBack = () => {
  router.back()
}
const navigateHome = () => {
  router.replace('/')
}
</script>

<style lang="less" scoped>
.developer-view {
  height: 100%;
  width: 100%;
  padding: 24px 12px;

  .developer-view-container {
    padding: 1rem 1.6rem;
    height: 100%;
    width: 100%;
    border: var(--border);
    border-radius: var(--card-border-radius);
    background-color: var(--color-background-half);
    backdrop-filter: var(--blur);
    overflow-y: auto;
    scrollbar-width: none;
  }
}

.btn-group {
  display: flex;
  align-items: center;
  column-gap: 1rem;

  img {
    height: 28px;
    width: 28px;
    cursor: pointer;
  }
}

.developer-details {
  margin-top: 2rem;
}

.separator {
  height: 1px;
  background-color: var(--color-theme);
  margin: 1.2rem 1rem;
}
</style>
