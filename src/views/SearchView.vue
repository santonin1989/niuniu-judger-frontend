<template>
  <SearchBox />
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
</script>

<style scoped lang="less"></style>
