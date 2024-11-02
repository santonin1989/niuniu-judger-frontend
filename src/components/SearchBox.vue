<template>
  <div class="search-box">
    <div class="container">
      <div class="tabs" :style="{ '--active': activeTab }">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="{ active: activeTab === index }"
          class="tab"
        >
          {{ tab }}
        </div>
      </div>
      <div class="search-input">
        <form class="form" @submit.prevent="search">
          <input
            v-model="userInput"
            class="input"
            type="text"
            :placeholder
            maxlength="20"
          />
          <div class="icon-container">
            <div v-show="userInput" @click="clearInput" class="clear-btn">
              清除
            </div>
            <img @click="search" class="icon" :src="searchIcon" alt="搜索" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import searchIcon from '@/components/icons/search.svg'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tabs = ['开发者', '领域']
const activeTab = ref(0) // 当前选中的标签
const placeholder = computed(() => {
  if (activeTab.value === 0) {
    return '输入GitHub用户名搜索开发者...'
  } else {
    return '输入领域名称搜索领域开发者...'
  }
})
const userInput = ref('') // 用户输入内容

const search = () => {
  console.log(userInput.value)
  if (userInput.value) {
    if (activeTab.value === 0) {
      router.push({ name: 'search', query: { name: userInput.value } })
    } else {
      router.push({ name: 'search', query: { domain: userInput.value } })
    }
  }
}
const clearInput = () => {
  userInput.value = ''
  router.push({ path: '/' })
}
</script>

<style scoped lang="less">
.search-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    max-width: 600px;
    width: 100%;
  }

  .tabs {
    display: flex;
    margin-bottom: 8px;
    font-size: 0.9rem;
    height: 32px;
    position: relative;
    isolation: isolate;
    --active: 0;
    --tab-width: 100px;
    --active-width: 80px;
    user-select: none;

    .tab {
      font-weight: normal;
      width: var(--tab-width);
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        color: var(--color--theme-text);
      }
    }

    &::after {
      pointer-events: none;
      position: absolute;
      content: '';
      inset: 0 calc((var(--tab-width) - var(--active-width)) / 2) -1px;
      background: linear-gradient(
        180deg,
        rgba(9, 254, 235, 0.43) 0%,
        rgba(9, 254, 235, 0) 71.05%
      );
      z-index: -1;
      width: var(--active-width);
      border-radius: 0.5rem 0.5rem 0 0;

      transform: translateX(calc(var(--active) * var(--tab-width)));
      transition: transform 0.3s ease-in-out;
    }
  }

  .search-input {
    width: 100%;
    height: 48px;
    background-color: var(--color-background);
    border-radius: 30px;
    border: var(--border);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0px 0px 16px rgba(0, 254, 235, 0.32);

    .form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 4px 0px 12px;
      box-sizing: border-box;
    }

    input {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 1rem;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    .icon-container {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      column-gap: 12px;

      .clear-btn {
        font-size: 1rem;
        cursor: pointer;
        user-select: none;

        &:hover {
          color: var(--color-theme);
        }
      }

      .icon {
        width: 36px;
        height: 36px;
        cursor: pointer;
      }
    }

    .icon {
      width: 36px;
      height: 36px;
      cursor: pointer;
    }
  }
}
</style>
