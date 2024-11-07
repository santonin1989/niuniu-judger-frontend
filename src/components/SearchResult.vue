<template>
  <div class="search-result">
    <div class="search-result-content">
      <!-- 搜索结果过滤器 -->
      <div class="filter-container">
        <div class="filter-item developer">开发者</div>
        <div class="filter-item username">username</div>
        <div class="filter-item talentrank">TalentRank</div>
        <div @click="isSearchNation = true" class="filter-item nation">
          <div
            style="
              cursor: pointer;
              display: flex;
              flex-direction: row;
              column-gap: 2px;
              align-items: center;
            "
          >
            <p>{{ nation ? nation : '国家' }}</p>
            <svg viewBox="0 0 1024 1024" width="20" height="20">
              <path
                d="M576.111 927.64c-4.956 0-9.922-1.15-14.485-3.467l-128.026-65a32 32 0 0 1-17.513-28.533V497.683L165.184 246.779a32 32 0 0 1 22.627-54.627h640.857a32 32 0 0 1 22.627 54.627L608.112 489.963V895.64a31.997 31.997 0 0 1-32.001 32z m-96.024-116.642l64.025 32.507V476.708a31.996 31.996 0 0 1 9.373-22.627l197.928-197.929H265.066L470.714 461.8a32.001 32.001 0 0 1 9.373 22.627v326.571z"
                fill="#ffffff"
                p-id="5404"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="loading-wrapper" v-if="list.length === 0">
        <NiuniuLoading />
      </div>
      <!-- 搜索结果列表 -->
      <PerfectScrollbar v-else>
        <div class="result-container">
          <div
            @click="toDetails(item.username)"
            v-for="(item, index) in showResultList"
            :key="index"
            class="result-item"
          >
            <div class="developer prop">
              <img :src="item.avatarUrl as string" alt="avatar" />
              <p>{{ item.name }}</p>
            </div>
            <div class="score prop">{{ item.username }}</div>
            <div class="score prop">{{ item.username }}</div>
            <div class="score prop">{{ item.username }}</div>
          </div>
        </div>
      </PerfectScrollbar>
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
  <SearchNation
    @closeSearch="isSearchNation = false"
    @searchNation="handleSearchNation"
    v-if="isSearchNation"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NiuniuLoading from './NiuniuLoading.vue'
import { Search } from '@/api/search'
import type { DeveloperDTO } from '@/types/DTO'
import SearchNation from './SearchNation.vue'

const list = ref<DeveloperDTO[]>([])

const route = useRoute()
const name = computed(() => route.query.name as string)
const domain = computed(() => route.query.domain as string)

onMounted(() => {
  fetchResult()
})

const nation = ref()
const isSearchNation = ref(false)
const handleSearchNation = (res: string) => {
  isSearchNation.value = false
  nation.value = res
}

// 获取搜索结果列表
const fetchResult = () => {
  if (name.value) {
    Search.searchDeveloper(name.value).then(res => {
      console.log(res)
      list.value = res as unknown as DeveloperDTO[]
    })
  } else if (domain.value) {
    Search.searchDomain(domain.value).then(res => {
      // console.log(res)
      list.value = res as unknown as DeveloperDTO[]
    })
  }
}

// 监听路由变化，重新获取搜索结果
watch(
  () => route.query,
  () => {
    list.value = []
    fetchResult()
  },
)

// 当前页的结果列表
const showResultList = computed(() => {
  return list.value.slice(
    (currentPage.value - 1) * maxPageToShow,
    currentPage.value * maxPageToShow,
  )
})
const maxPageToShow = 10 // 每页最大显示条数
const sumPage = computed(() => {
  return Math.ceil(list.value.length / maxPageToShow)
}) // 总页数
const currentPage = ref(1) // 当前页数
// 页码展示
const showSumPage = computed(() => {
  const maxPageToShow = 8 // 最大展示页码数
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
})
// 切换页码
const changePage = (page: number) => {
  if (page === -1) return
  if (page < 1 || page > sumPage.value) return
  currentPage.value = page
}

// 跳转到详情页
const router = useRouter()
const toDetails = (i: string) => {
  router.push({ name: 'developer', params: { name: i } })
}
</script>

<style scoped lang="less">
.loading-wrapper {
  width: 100%;
  padding-top: 120px;
}

.search-result {
  width: 100%;
  max-width: 680px;
  height: calc(100% - 88px - 1.5rem);
  --filter-height: 2.2rem;
  --content-margin-bottom: 0.5rem;
  --page-nav-height: 3rem;
  user-select: none;
  --developer-flex-grow: 4;

  .ps {
    height: calc(100% - var(--filter-height));
  }

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
      color: var(--color-theme);

      .filter-item {
        flex-grow: 1;
        flex-basis: 80px;
        text-align: center;
        justify-items: center;
        flex-wrap: nowrap;
      }

      .filter-item.developer {
        flex-grow: var(--developer-flex-grow);
      }
    }

    .result-container {
      height: calc(100% - 2rem);
      display: flex;
      flex-direction: column;
      row-gap: 12px;
      padding-bottom: 8px;
      /*overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;*/

      .result-item {
        flex-shrink: 0;
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: white;
        border-radius: 8px;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: rgba(255, 255, 255, 0.16);
          cursor: pointer;
        }

        .prop {
          flex-grow: 1;
          flex-basis: 80px;
          text-align: center;
        }

        .developer {
          flex-grow: var(--developer-flex-grow);
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
