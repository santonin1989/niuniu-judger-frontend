<template>
  <div class="rec-card">
    <!-- 标题 -->
    <div class="card-title">{{ cardTitle }}</div>
    <template v-if="cardType === 'developer'">
      <!-- 个人信息 -->
      <div @click="toDetails" class="personal-info">
        <img class="avatar" src="/avatar.png" alt="头像" />
        <div class="name-desc">
          <div class="name">
            <p>Handsome</p>
            <img src="/cn.png" alt="国籍" />
          </div>
          <div class="desc only-two-line">
            我是一个开发者啊啊啊啊啊啊我是一个开发者啊啊啊啊啊啊我是一个开发者啊啊啊啊啊啊
          </div>
        </div>
      </div>
      <!-- 数据展示 -->
      <div class="personal-data-display">
        <div v-for="item in personalData" :key="item.title" class="data-item">
          <div class="data-title">{{ item.title }}</div>
          <div class="data-value">{{ item.value }}</div>
          <div v-if="item.fullname" class="data-desc">{{ item.fullname }}</div>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="separator"></div>
      <!-- 开发者评价 -->
      <div class="comment-container">
        <div class="quotation-wrapper up">
          <img class="quotation" :src="quotation" alt="quotation" />
        </div>
        <div class="comment" ref="commentElement">
          我是对开发者的评价啊啊啊啊啊我是对开发者的评价啊啊啊啊啊我是对开发者的评价啊啊啊啊啊我是对开发者的评价啊啊啊啊啊
        </div>
        <div class="quotation-wrapper down">
          <img class="quotation" :src="quotation" alt="quotation" />
        </div>
      </div>
    </template>
    <template v-else>
      <!-- 项目信息 -->
      <div class="project-info">
        <div class="name only-one-line">I-am-a-famous-project</div>
        <div class="desc only-three-line">
          我是一个项目介绍啊啊啊啊啊啊我是一个项目介绍啊啊啊啊啊啊我是一个项目介绍啊啊啊啊啊啊
        </div>
      </div>
      <!-- 数据展示 -->
      <div class="personal-data-display">
        <div v-for="item in projectData" :key="item.title" class="data-item">
          <div class="data-title">{{ item.title }}</div>
          <div class="data-value">{{ item.value }}</div>
          <div v-if="item.fullname" class="data-desc">{{ item.fullname }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import quotation from '@/components/icons/quotation.svg'
import { formatBigNumber } from '@/utils/formatNumber'
import { useRouter } from 'vue-router'

const cardType = ref('developer')
// const props = defineProps<{
//   cardType: 'developer' | 'project'
// }>()
const cardTitle = computed(() => {
  return cardType.value === 'developer'
    ? '今日推荐·开发者'
    : '今日推荐·开源项目'
})

const personalData = [
  {
    title: 'T.R.',
    value: 'A',
    fullname: 'Talent Rank',
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

const projectData = [
  {
    title: 'Imp.',
    value: '92',
    fullname: 'Importance',
  },
  {
    title: 'Star',
    value: '2.4K',
  },
  {
    title: 'Fork',
    value: '36',
  },
]

const router = useRouter()
const toDetails = () => {
  router.push({
    name: 'developer',
    params: {
      name: '小帅',
    },
  })
}
</script>

<style scoped lang="less">
.rec-card {
  transition: none;
  width: 100%;
  background-color: var(--color-background-half);
  -webkit-backdrop-filter: var(--blur);
  backdrop-filter: var(--blur);
  border-radius: var(--card-border-radius);
  border: var(--border);
  padding: 20px;

  .card-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .personal-info {
    position: relative;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: var(--column-gap);
    --avatar-size: 4rem;
    --column-gap: 1rem;

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    &::after {
      position: absolute;
      z-index: -1;
      content: '';
      inset: -8px;
      display: block;
      background-color: rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
    }

    .avatar {
      width: var(--avatar-size);
      height: var(--avatar-size);
      border-radius: 50%;
    }

    .name-desc {
      width: calc(100% - var(--avatar-size) - var(--column-gap));
      display: flex;
      flex-direction: column;
      justify-content: center;

      .name {
        display: flex;
        align-items: center;
        column-gap: 0.6rem;
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 4px;

        img {
          width: 20px;
          height: 15px;
          transform: translateY(2px);
        }
      }

      .desc {
        font-size: 0.75rem;
        letter-spacing: 0.3px;
        line-height: 1.2rem;
      }
    }
  }

  .personal-data-display {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .separator {
    height: 1px;
    background-color: var(--color-theme);
    margin: 1.2rem 8px 12px;
  }

  .comment-container {
    position: relative;
    padding: 16px 0px 0px;

    .comment {
      padding: 0 4px;
      font-size: 0.9rem;
      color: white;
      line-height: 1.7rem;
      letter-spacing: 0.4px;
    }

    .quotation-wrapper {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      .quotation {
        width: 12px;
        height: 12px;
      }

      &.up {
        transform: translate(-20%, -30%);
      }

      &.down {
        float: right;
        transform: translate(20%, 0) rotate(180deg);
      }
    }
  }
}

.project-info {
  .name {
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
}

.data-item {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 0.5rem;
  position: relative;
  user-select: none;

  .data-title {
    font-size: 0.8rem;
    font-weight: lighter;
  }

  .data-value {
    font-size: 1.2rem;
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

.related-info {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .info-item {
    display: flex;
    align-items: center;
    column-gap: 4px;
    font-size: 0.9rem;

    img {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
}
</style>
