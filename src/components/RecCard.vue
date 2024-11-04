<template>
  <div class="rec-card">
    <!-- 标题 -->
    <div class="card-title">今日推荐·开发者</div>
    <!-- 个人信息 -->
    <div class="personal-info">
      <img class="avatar" src="/avatar.png" alt="头像" />
      <div class="name-desc">
        <div class="name">
          <p>Handsome</p>
          <img src="/cn.png" alt="国籍" />
        </div>
        <div class="desc">
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
    <!-- 仓库 -->
    <div v-for="i in 2" :key="i" class="repo-list">
      <!-- 分割线 -->
      <div class="separator"></div>
      <div class="repo">
        <!-- 头部信息 -->
        <div class="header">
          <div class="title">repository-name</div>
          <div class="data-display">
            <div v-for="item in repoData" :key="item.title" class="data-item">
              <div class="data-title">{{ item.title }}</div>
              <div class="data-value">{{ item.value }}</div>
              <div v-if="item.fullname" class="data-desc">
                {{ item.fullname }}
              </div>
            </div>
          </div>
        </div>
        <!-- 仓库描述 -->
        <div class="desc">
          This is a repository description.This is a repository description.This
          is a repository description.This is a repository description.
        </div>
        <!-- 相关信息 -->
        <div class="related-info">
          <div v-for="i in 3" :key="i" class="info-item">
            <img src="/star.png" alt="star" />
            <div class="info">1,392</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const personalData = [
  {
    title: 'T.R.',
    value: '92',
    fullname: 'Talent Rank',
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

const repoData = [
  {
    title: 'Imp.',
    value: '92',
    fullname: 'Importance',
  },
  {
    title: 'Contr.',
    value: '36',
    fullname: 'Contribution',
  },
]
</script>

<style scoped lang="less">
.rec-card {
  transition: none;
  width: 100%;
  background-color: var(--color-background-half);
  backdrop-filter: var(--blur);
  border-radius: var(--card-border-radius);
  border: var(--border);
  padding: 20px;

  .card-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
  }

  .personal-info {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: var(--column-gap);
    --avatar-size: 4rem;
    --column-gap: 1rem;

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
        display: -webkit-box; /* 设置为WebKit内核的弹性盒子模型 */
        -webkit-box-orient: vertical; /* 垂直排列 */
        -webkit-line-clamp: 2; /* 限制显示两行 */
        overflow: hidden; /* 隐藏超出范围的内容 */
        text-overflow: ellipsis; /* 使用省略号 */
      }
    }
  }

  .personal-data-display {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .repo-list {
    .separator {
      height: 1px;
      background-color: var(--color-theme);
      margin: 1.2rem 8px 12px;
    }

    .repo {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 12px;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          color: white;
          font-size: 1rem;
        }

        .data-display {
          display: flex;
          column-gap: 20px;

          .data-item {
            .data-value {
              font-size: 1rem;
            }

            .data-desc {
              right: 0px;
              top: -4px;
            }
          }
        }
      }

      .desc {
        font-size: 0.75rem;
        display: -webkit-box; /* 设置为WebKit内核的弹性盒子模型 */
        -webkit-box-orient: vertical; /* 垂直排列 */
        -webkit-line-clamp: 2; /* 限制显示两行 */
        overflow: hidden; /* 隐藏超出范围的内容 */
        text-overflow: ellipsis; /* 使用省略号 */
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
    }
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
</style>
