<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavigation from './components/TopNavigation.vue'
import RecList from './components/RecList.vue'
import QiniuCloud from './components/QiniuCloud.vue'
</script>

<template>
  <QiniuCloud />

  <TopNavigation />

  <div class="three-col-container">
    <RecList class="rec-card-list" />
    <div class="search-container">
      <RouterView />
    </div>
    <RecList class="rec-card-list" />
  </div>
</template>

<style scoped lang="less">
.three-col-container {
  height: calc(100vh - 96px);
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 3%;

  .search-container {
    height: 100%;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
  }
  .rec-card-list {
    flex-grow: 1;
  }
}

@media screen and (max-width: 992px) {
  .three-col-container {
    justify-content: center;
    padding: 0 2rem;

    .rec-card-list {
      display: none;
    }
  }
}
</style>
