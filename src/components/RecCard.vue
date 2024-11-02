<template>
  <div class="rec-card">
    <p></p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.rec-card {
  flex-shrink: 0;
  width: 100%;
  background-color: var(--color-background-half);
  backdrop-filter: var(--blur);
  height: 400px;
  border-radius: var(--card-border-radius);
  border: var(--border);
}
</style>
