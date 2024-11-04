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
  width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px 0;
  overflow-y: scroll;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
