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
      <div :style="inputBoxHeight" class="search-input">
        <form class="form" @submit.prevent="search">
          <input
            @focus="isFocus = true"
            @blur="isFocus = false"
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
        <div class="search-history">
          <div class="title">
            <div>搜索历史</div>
            <svg
              class="delete-icon"
              @click="clearHistory"
              :src="deleteIcon"
              t="1730766752455"
              viewBox="0 0 1024 1024"
              width="200"
              height="200"
            >
              <path
                d="M615.258353 800.225882a34.334118 34.334118 0 0 1-34.394353-34.394353V387.192471a34.334118 34.334118 0 1 1 68.848941 0v378.639058a34.334118 34.334118 0 0 1-34.454588 34.394353z m-206.486588 0a34.334118 34.334118 0 0 1-34.454589-34.394353V387.192471a34.334118 34.334118 0 1 1 68.848942 0v378.639058a34.334118 34.334118 0 0 1-34.394353 34.394353z m550.731294-585.125647H787.290353V146.251294a103.002353 103.002353 0 0 0-102.4-103.243294H339.862588c-56.922353 0-103.243294 46.320941-103.243294 103.243294v68.848941H64.466824a34.334118 34.334118 0 1 0 0 68.848941H959.563294a34.334118 34.334118 0 1 0 0-68.848941zM305.408 146.251294c0-18.974118 15.480471-34.394353 34.454588-34.394353h344.96753c18.853647 0 33.671529 15.058824 33.671529 34.394353v68.848941H305.408V146.251294z m447.608471 860.521412h-481.882353c-56.982588 0-103.303529-46.381176-103.30353-103.30353V386.710588a34.454588 34.454588 0 0 1 68.848941 0V903.529412c0 19.034353 15.420235 34.454588 34.394353 34.454588h481.942589a34.454588 34.454588 0 0 0 34.454588-34.454588V388.096a34.394353 34.394353 0 1 1 68.848941 0v515.373176c0 56.982588-46.381176 103.303529-103.303529 103.30353z"
                fill="#c4c4c4"
                p-id="4505"
              ></path>
            </svg>
          </div>
          <div class="history-list">
            <div
              @click="searchHistory(item, index)"
              v-for="(item, index) in history"
              :key="index"
              class="history-item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import searchIcon from '@/components/icons/search.svg'
import deleteIcon from '@/components/icons/delete.svg'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  loadHistory() // 加载localStorage历史记录
})

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

// 搜索
const search = () => {
  // console.log(userInput.value)
  isFocus.value = false
  if (userInput.value) {
    addHistory(userInput.value)
    if (activeTab.value === 0) {
      router.push({ name: 'search', query: { name: userInput.value } })
    } else {
      router.push({ name: 'search', query: { domain: userInput.value } })
    }
  }
}
// 清除输入框内容
const clearInput = () => {
  userInput.value = ''
  router.push({ path: '/' })
}

// 历史记录
const developerHistory = ref<string[]>([])
const domainHistory = ref<string[]>([])
const history = computed(() => {
  if (activeTab.value === 0) {
    return developerHistory.value
  } else {
    return domainHistory.value
  }
})

// 搜索指定历史记录
const searchHistory = (item: string, index: number) => {
  userInput.value = item
  // 将该历史记录提到最前面
  if (activeTab.value === 0) {
    developerHistory.value.splice(index, 1)
    developerHistory.value.unshift(item)
  } else {
    domainHistory.value.splice(index, 1)
    domainHistory.value.unshift(item)
  }
  isFocus.value = false
  if (userInput.value) {
    if (activeTab.value === 0) {
      router.push({ name: 'search', query: { name: userInput.value } })
    } else {
      router.push({ name: 'search', query: { domain: userInput.value } })
    }
  }
  saveHistory()
}
// 将搜索结果存入历史记录
const addHistory = (item: string) => {
  if (activeTab.value === 0) {
    developerHistory.value.unshift(item)
    developerHistory.value.splice(30)
  } else {
    domainHistory.value.unshift(item)
    domainHistory.value.splice(30)
  }
  saveHistory()
}
// 清空历史记录
const clearHistory = () => {
  if (activeTab.value === 0) {
    developerHistory.value = []
  } else {
    domainHistory.value = []
  }
  clearLocalStorage()
}
// 持久化
const saveHistory = () => {
  localStorage.setItem(
    'developerHistory',
    JSON.stringify(developerHistory.value),
  )
  localStorage.setItem('domainHistory', JSON.stringify(domainHistory.value))
}
// 加载持久化历史记录
const loadHistory = () => {
  const developerHistoryStr = localStorage.getItem('developerHistory')
  const domainHistoryStr = localStorage.getItem('domainHistory')
  if (developerHistoryStr) {
    developerHistory.value = JSON.parse(developerHistoryStr)
  }
  if (domainHistoryStr) {
    domainHistory.value = JSON.parse(domainHistoryStr)
  }
}
// 清空持久化
const clearLocalStorage = () => {
  localStorage.removeItem('developerHistory')
  localStorage.removeItem('domainHistory')
}

const isFocus = ref(false)
const inputBoxHeight = computed(() => {
  if (isFocus.value) {
    return 'height: var(--focus-input-height);'
  } else {
    return 'height: var(--input-height);'
  }
})
</script>

<style scoped lang="less">
.search-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  --title-height: 1.2rem;
  --title-margin-bottom: 16px;
  --history-item-height: 1.6rem;
  --history-list-gap: 12px;
  --history-padding: 8px;
  --tabs-height: 32px;
  --tabs-margin-bottom: 8px;
  --input-height: 48px;
  --focus-input-height: calc(
    var(--input-height) + var(--title-height) + var(--title-margin-bottom) +
      var(--history-item-height) * 3 + var(--history-list-gap) * 3 +
      var(--history-padding) * 2
  );

  .container {
    height: calc(
      var(--tabs-height) + var(--tabs-margin-bottom) + var(--input-height)
    );
    max-width: 600px;
    width: 100%;
    position: relative;
  }

  .tabs {
    display: flex;
    margin-bottom: var(--tabs-margin-bottom);
    font-size: 0.9rem;
    height: var(--tabs-height);
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
    z-index: 1;
    position: absolute;
    width: 100%;
    height: var(--input-height);
    background-color: var(--color-background);
    border-radius: calc(var(--input-height) / 2);
    border: var(--border);
    display: flex;
    flex-direction: column;
    align-items: normal;
    box-sizing: border-box;
    box-shadow: 0px 0px 16px rgba(0, 254, 235, 0.32);
    transition: height 0.3s ease-in-out;
    overflow: hidden;

    .form {
      flex-shrink: 0;
      height: calc(var(--input-height) - 2px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
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

  .search-history {
    flex-shrink: 0;
    padding: var(--history-padding) 12px;
    user-select: none;
    max-height: calc(
      var(--title-height) + var(--title-margin-bottom) +
        var(--history-item-height) * 3 + var(--history-list-gap) * 3 +
        var(--history-padding)
    );
    overflow: hidden;

    .title {
      height: var(--title-height);
      font-size: 0.9rem;
      margin-bottom: var(--title-margin-bottom);
      transform: translateX(0.5rem);
      display: flex;
      column-gap: 16px;
      align-items: center;
      color: white;

      .delete-icon {
        width: 16px;
        height: 16px;
        cursor: pointer;

        &:hover path {
          fill: var(--color-theme);
        }
      }
    }

    .history-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--history-list-gap);

      .history-item {
        padding: 0 12px;
        height: var(--history-item-height);
        border-radius: 0.8rem;
        background-color: rgba(0, 0, 0, 0.9);

        &:hover {
          background-color: var(--color-theme);
          color: var(--color-background);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
