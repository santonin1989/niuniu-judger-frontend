<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import TopNavigation from './components/TopNavigation.vue'
import SearchBox from './components/SearchBox.vue'
import RecList from './components/RecList.vue'
</script>

<template>
  <img class="bg-img" src="/一朵云.png" alt="一朵云" />
  <TopNavigation />

  <div class="three-col-container">
    <RecList class="rec-card-list" />
    <SearchBox clas="search-box" />
    <RecList class="rec-card-list" />
  </div>
</template>

<style scoped lang="less">
.bg-img {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: -1;
  width: 72vw;
  min-width: 600px;
  max-width: 1000px;
}

.three-col-container {
  height: calc(100vh - 96px - 20px);
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
