<template>
  <div class="popular-repo">
    <div class="title">Popular Repositories</div>
    <div class="repo-container">
      <div class="repo-list">
        <div v-for="i in 10" :key="i" class="repo-item">
          <div class="repo-name">
            <a href="#" target="_blank">I-am-a--famous-repo</a>
          </div>
          <div class="repo-data">
            <div class="data-item">
              <p>&lt;重要程度 /&gt;</p>
              <p class="value">96%</p>
            </div>
            <div class="data-item">
              <p>&lt;贡献度 /&gt;</p>
              <p class="value">60%</p>
            </div>
          </div>
          <div class="repo-desc">
            我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是
          </div>
          <div class="star-fork">
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                ></path>
              </svg>
              <p>1.2k</p>
            </div>
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                ></path>
              </svg>
              <p>1.2k</p>
            </div>
          </div>
        </div>
      </div>
      <div class="repo-list">
        <div v-for="i in 10" :key="i" class="repo-item">
          <div class="repo-name">
            <a href="#" target="_blank">I-am-a--famous-repo</a>
          </div>
          <div class="repo-data">
            <div class="data-item">
              <p>&lt;重要程度 /&gt;</p>
              <p class="value">96%</p>
            </div>
            <div class="data-item">
              <p>&lt;贡献度 /&gt;</p>
              <p class="value">60%</p>
            </div>
          </div>
          <div class="repo-desc">
            我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是仓库介绍我是
          </div>
          <div class="star-fork">
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                ></path>
              </svg>
              <p>1.2k</p>
            </div>
            <div class="data-item">
              <svg class="icon" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                ></path>
              </svg>
              <p>1.2k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  display: flex;
  column-gap: 6%;

  .repo-list {
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
      }

      .repo-data {
        margin-bottom: 16px;
      }

      .repo-data,
      .star-fork {
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;

        .data-item {
          display: flex;
          column-gap: 12px;
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
