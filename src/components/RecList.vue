<template>
  <div class="rec-list">
    <RecCard />
    <RecCard />
    <RecCard />
  </div>
</template>

<script setup lang="ts">
import RecCard from './RecCard.vue'
</script>

<style scoped lang="less">
.rec-list {
  flex-grow: 1;
  min-width: 280px;
  max-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-bottom: 24px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
