<template>
  <div class="developer-view">
    <div class="developer-view-container">
      <!-- 返回按钮 -->
      <div class="btn-group">
        <div class="btn">
          <img :src="backIcon" @click="navigateBack" alt="back" />
        </div>
        <div class="btn">
          <img :src="homeIcon" @click="navigateHome" alt="home" />
        </div>
      </div>
      <!-- 开发者档案 -->
      <DeveloperProfile
        :info="info as DeveloperDTO"
        class="developer-details"
      />
      <!-- 分割线 -->
      <div class="separator"></div>
      <!-- 开发者评价 -->
      <DeveloperEvaluation
        :info="info as DeveloperDTO"
        class="developer-evaluation"
      />
      <!-- 分割线 -->
      <div class="separator"></div>
      <!-- 热门仓库 -->
      <PopularRepo :username="name as string" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Developer } from '@/api/developer'
import DeveloperEvaluation from '@/components/DeveloperDetails/DeveloperEvaluation.vue'
import DeveloperProfile from '@/components/DeveloperDetails/DeveloperProfile.vue'
import PopularRepo from '@/components/DeveloperDetails/PopularRepo.vue'
import backIcon from '@/components/icons/back.svg'
import homeIcon from '@/components/icons/home.svg'
import type { DeveloperDTO } from '@/types/DTO'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const navigateBack = () => {
  router.back()
}
const navigateHome = () => {
  router.replace('/')
}

const name = route.params.name as string
const info = ref<DeveloperDTO>()
onMounted(() => {
  Developer.getDeveloperInfoByName(name)
    .then(res => {
      // console.log(res)
      info.value = res as unknown as DeveloperDTO
    })
    .catch(err => {
      console.log(err)
    })
})
</script>

<style lang="less" scoped>
.developer-view {
  height: 100%;
  width: 100%;
  padding: 24px 12px;

  .developer-view-container {
    position: relative;
    padding: 1rem 1.6rem;
    height: 100%;
    width: 100%;
    border: var(--border);
    border-radius: var(--card-border-radius);
    background-color: var(--color-background-half);
    -webkit-backdrop-filter: var(--blur);
    backdrop-filter: var(--blur);
    overflow-y: scroll;
    scrollbar-width: none;
  }
}

.btn-group {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  .btn {
    padding: 8px;
    border-radius: 50%;
    background-color: rgba(21, 18, 25, 0.72);
  }

  img {
    height: 28px;
    width: 28px;
    cursor: pointer;
  }
}

.developer-details {
  margin-top: 1rem;
}

.separator {
  height: 1px;
  background-color: var(--color-theme);
  margin: 1.2rem 1rem;
}
</style>
