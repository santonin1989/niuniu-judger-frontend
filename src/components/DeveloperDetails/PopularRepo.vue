<template>
  <div v-if="repoList" class="popular-repo">
    <div class="title">Popular Repositories</div>
    <div class="repo-container">
      <div class="repo-list">
        <div v-for="(item, index) in list01" :key="index" class="repo-item">
          <div class="repo-name">
            <a :href="item.htmlUrl" target="_blank">{{ item.name }}</a>
          </div>
          <div class="repo-data">
            <div class="data-item">
              <p>&lt;重要程度 /&gt;</p>
              <p class="value">{{ item.projectImportance?.toFixed(2) }}</p>
            </div>
          </div>
          <div class="repo-desc">
            {{ item.description === '' ? '暂无描述' : item.description }}
          </div>
          <div class="star-fork">
            <div class="data-item">
              <svg
                class="icon"
                viewBox="0 0 1024 1024"
                width="200"
                height="200"
              >
                <path
                  d="M335 274.1c-14.1-14.1-36.9-14.1-50.9 0L75.4 482.7c-6.8 6.8-10.5 15.9-10.5 25.5s3.8 18.7 10.5 25.5L284 742.3c7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5c14.1-14.1 14.1-36.9 0-50.9L151.8 508.2 335 325.1c14-14.1 14-36.9 0-51zM949.5 482.7L740.9 274.1c-14.1-14.1-36.9-14.1-50.9 0-14.1 14.1-14.1 36.9 0 50.9l183.1 183.1-183.2 183.2c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5l208.6-208.6c14-14 14-36.8 0-50.9zM608.7 176.3c-19.1-5.4-39 5.7-44.4 24.8L391.1 812.5c-5.4 19.1 5.7 39 24.8 44.4 3.3 0.9 6.6 1.4 9.8 1.4 15.7 0 30.1-10.3 34.6-26.2l173.2-611.4c5.5-19.1-5.7-39-24.8-44.4z"
                  p-id="4363"
                  fill="#ffffff"
                ></path>
              </svg>
              <p>{{ item.language }}</p>
            </div>
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                ></path>
              </svg>
              <p>{{ formatBigNumber(item.stars) }}</p>
            </div>
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                ></path>
              </svg>
              <p>{{ formatBigNumber(item.forks) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="repo-list">
        <div v-for="(item, index) in list02" :key="index" class="repo-item">
          <div class="repo-name">
            <a :href="item.htmlUrl" target="_blank">{{ item.name }}</a>
          </div>
          <div class="repo-data">
            <div class="data-item">
              <p>&lt;重要程度 /&gt;</p>
              <p class="value">{{ item.projectImportance?.toFixed(2) }}</p>
            </div>
          </div>
          <div class="repo-desc">
            {{ item.description === '' ? '暂无描述' : item.description }}
          </div>
          <div class="star-fork">
            <div class="data-item">
              <svg
                class="icon"
                viewBox="0 0 1024 1024"
                width="200"
                height="200"
              >
                <path
                  d="M335 274.1c-14.1-14.1-36.9-14.1-50.9 0L75.4 482.7c-6.8 6.8-10.5 15.9-10.5 25.5s3.8 18.7 10.5 25.5L284 742.3c7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5c14.1-14.1 14.1-36.9 0-50.9L151.8 508.2 335 325.1c14-14.1 14-36.9 0-51zM949.5 482.7L740.9 274.1c-14.1-14.1-36.9-14.1-50.9 0-14.1 14.1-14.1 36.9 0 50.9l183.1 183.1-183.2 183.2c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5l208.6-208.6c14-14 14-36.8 0-50.9zM608.7 176.3c-19.1-5.4-39 5.7-44.4 24.8L391.1 812.5c-5.4 19.1 5.7 39 24.8 44.4 3.3 0.9 6.6 1.4 9.8 1.4 15.7 0 30.1-10.3 34.6-26.2l173.2-611.4c5.5-19.1-5.7-39-24.8-44.4z"
                  p-id="4363"
                  fill="#ffffff"
                ></path>
              </svg>
              <p>{{ item.language }}</p>
            </div>
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                ></path>
              </svg>
              <p>{{ formatBigNumber(item.stars) }}</p>
            </div>
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                ></path>
              </svg>
              <p>{{ formatBigNumber(item.forks) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="no-comment">
    <NiuniuLoading />
  </div>
</template>

<script setup lang="ts">
import { Project } from '@/api/project'
import type { ProjectType } from '@/types/project'
import { computed, onMounted, ref } from 'vue'
import { formatBigNumber } from '@/utils/formatNumber'
import NiuniuLoading from '../NiuniuLoading.vue'

const props = defineProps<{
  username: string
}>()

onMounted(() => {
  Project.getProjectList(props.username)
    .then(res => {
      // console.log(res)
      repoList.value = res as unknown as ProjectType[]
    })
    .catch(err => {
      console.log(err)
    })
})

const repoList = ref<ProjectType[]>()
const list01 = computed(() => {
  // 返回偶数索引的项目
  return repoList.value?.filter((_, index) => index % 2 === 0)
})
const list02 = computed(() => {
  // 返回奇数索引的项目
  return repoList.value?.filter((_, index) => index % 2 !== 0)
})
</script>

<style scoped lang="less">
.popular-repo {
  margin-top: 20px;
  width: 100%;

  .title {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
}

.repo-container {
  width: 100%;
  display: flex;
  column-gap: 20px;

  .repo-list {
    flex: 0;
    flex-basis: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;

    .repo-item {
      .repo-name {
        font-size: 1.2rem;

        a {
          color: white;
          text-decoration: none;
        }

        &:hover a {
          color: var(--color-theme);
        }
      }

      .repo-data {
        margin-bottom: 16px;
      }

      .repo-data,
      .star-fork {
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 1.6rem;

        .data-item {
          display: flex;
          column-gap: 8px;
          align-items: center;

          .icon {
            width: 20px;
            height: 20px;
          }

          path {
            fill: white;
          }
        }

        .value {
          color: var(--color-theme);
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
