<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import TopNavigation from './components/TopNavigation.vue'
import SearchBox from './components/SearchBox.vue'
import RecList from './components/RecList.vue'
import QiniuCloud from './components/QiniuCloud.vue'
</script>

<template>
  <QiniuCloud />

  <TopNavigation />

  <div class="three-col-container">
    <RecList class="rec-card-list" />
    <SearchBox clas="search-box" />
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
