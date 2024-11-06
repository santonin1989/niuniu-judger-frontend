<template>
  <div class="not-found-view">
    <div class="not-found-view-container">
      <h1 class="title">牛牛找不到这个页面哞~</h1>
      <RouterLink class="back-home" to="/">点击此处返回首页</RouterLink>
    </div>
  </div>
</template>

<style lang="less" scoped>
.not-found-view {
  height: 100%;
  width: 100%;
  padding: 24px 12px;

  .not-found-view-container {
    position: relative;
    padding: 1rem 1.6rem 2rem;
    height: 100%;
    width: 100%;
    border: var(--border);
    border-radius: var(--card-border-radius);
    background-color: var(--color-background-half);
    -webkit-backdrop-filter: var(--blur);
    backdrop-filter: var(--blur);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      color: var(--color-theme);
      font-weight: bold;
      margin-bottom: 12px;
    }

    .back-home {
      color: var(--color-theme);
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
