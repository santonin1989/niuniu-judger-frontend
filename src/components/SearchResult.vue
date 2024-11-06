<template>
  <div class="search-result">
    <div class="search-result-content">
      <!-- 搜索结果过滤器 -->
      <div class="filter-container">
        <div class="filter-item developer">开发者</div>
        <div class="filter-item talentrank">得分</div>
        <div class="filter-item nation">国家</div>
        <div class="filter-item domain">领域</div>
      </div>
      <!-- 搜索结果列表 -->
      <div class="result-container">
        <div v-for="i in 12" :key="i" class="result-item">
          <div class="developer prop">
            <img src="/avatar.png" alt="avatar" />
            <p>开发者昵称</p>
          </div>
          <div class="score prop">96</div>
          <div class="nation prop">中国</div>
          <div class="domain prop">前端</div>
        </div>
      </div>
    </div>
    <!-- 页码导航 -->
    <div class="page-nav">
      <div class="page-nav-item">
        <div @click="changePage(1)" class="icon reverse">
          <img
            src="@/components/icons/right-double-arrow.svg"
            alt="left-double-arrow"
          />
        </div>
        <div @click="changePage(currentPage - 1)" class="icon reverse">
          <img src="@/components/icons/right-arrow.svg" alt="left-arrow" />
        </div>
      </div>
      <div class="page-nav-item">
        <div
          @click="changePage(i)"
          v-for="i in showSumPage"
          :key="i"
          :class="{ active: i === currentPage }"
          class="icon"
        >
          {{ i === -1 ? '...' : i }}
        </div>
      </div>
      <div class="page-nav-item">
        <div @click="changePage(currentPage + 1)" class="icon">
          <img src="@/components/icons/right-arrow.svg" alt="right-arrow" />
        </div>
        <div @click="changePage(sumPage)" class="icon">
          <img
            src="@/components/icons/right-double-arrow.svg"
            alt="right-double-arrow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const sumPage = ref(16) // 总页数
const currentPage = ref(1) // 当前页数
const showSumPage = computed(() => {
  const maxPageToShow = 10 // 最大展示页码数
  const pages: number[] = [] // 存储要展示的页码
  const totalPages = sumPage.value // 获取总页数
  const current = currentPage.value // 获取当前页

  if (totalPages <= maxPageToShow) {
    // 如果总页数小于等于最大展示页码数，全部展示
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    // 总页数大于最大展示页码数
    if (current <= 5) {
      // 当前页在前五页
      for (let i = 1; i <= maxPageToShow - 2; i++) {
        pages.push(i)
      }
      pages.push(-1) // 用 ... 替代
      pages.push(totalPages) // 显示最后一页
    } else if (current >= totalPages - 4) {
      // 当前页在最后五页
      pages.push(1) // 显示第一页
      pages.push(-1) // 用 ... 替代
      for (let i = totalPages - (maxPageToShow - 3); i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // 当前页在中间
      pages.push(1) // 显示第一页
      pages.push(-1) // 用 ... 替代
      for (let i = current - 2; i <= current + 3; i++) {
        pages.push(i)
      }
      pages.push(-1) // 用 ... 替代
      pages.push(totalPages) // 显示最后一页
    }
  }

  return pages.filter((page, index) => {
    // 去重和排除无效的页码
    return page === -1 || pages.indexOf(page) === index
  })
}) // 显示的页码
// 切换页码
const changePage = (page: number) => {
  if (page === -1) return
  if (page < 1 || page > sumPage.value) return
  currentPage.value = page
}
</script>

<style scoped lang="less">
.search-result {
  width: 100%;
  max-width: 600px;
  height: calc(100% - 88px - 1.5rem);
  --filter-height: 2.2rem;
  --content-margin-bottom: 0.5rem;
  --page-nav-height: 3rem;
  user-select: none;

  .search-result-content,
  .page-nav {
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: var(--blur);
    backdrop-filter: var(--blur);
    border-radius: var(--card-border-radius);
  }

  .page-nav {
    height: var(--page-nav-height);
    border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
  }

  /* 搜索结果盒子：包括过滤器、搜索结果 */
  .search-result-content {
    height: calc(100% - var(--page-nav-height) - var(--content-margin-bottom));
    margin-bottom: var(--content-margin-bottom);
    padding: 8px 12px 16px;
    overflow: hidden;

    .filter-container {
      height: var(--filter-height);
      width: 100%;
      display: flex;
      color: white;

      .filter-item {
        flex-grow: 1;
        flex-basis: 80px;
        text-align: center;
      }

      .filter-item.developer {
        flex-grow: 10;
      }
    }

    .result-container {
      height: calc(100% - 2rem);
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      row-gap: 12px;
      padding-bottom: 8px;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      .result-item {
        flex-shrink: 0;
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: white;

        .prop {
          flex-grow: 1;
          flex-basis: 80px;
          text-align: center;
        }

        .developer {
          flex-grow: 10;
          padding-left: 12px;
          display: flex;
          align-items: center;
          column-gap: 12px;
          color: white;

          img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            object-fit: cover;
          }
        }
      }
    }
  }

  /* 页面导航 */
  .page-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.9rem;
    color: white;

    .page-nav-item {
      display: flex;
      column-gap: 4px;

      .icon {
        transition: none;
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
        background-color: #262626;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.reverse {
          transform: rotate(180deg);
        }

        &:hover,
        &.active {
          background-color: var(--color-theme);
          color: var(--color-background);
        }
      }
    }
  }
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
