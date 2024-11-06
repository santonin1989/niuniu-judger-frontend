<template>
  <div v-if="info" class="developer-evaluation">
    <!-- 开发者评价 -->
    <div class="comment-container">
      <div class="quotation-wrapper up">
        <img class="quotation" :src="quotation" alt="quotation" />
      </div>
      <div class="comment" ref="commentElement">
        {{ info.comment }}
      </div>
      <div class="quotation-wrapper down">
        <img class="quotation" :src="quotation" alt="quotation" />
      </div>
    </div>
  </div>
  <div v-else class="no-comment">
    <p>牛牛正在努力分析中……</p>
  </div>
</template>

<script setup lang="ts">
import quotation from '@/components/icons/quotation.svg'
import type { DeveloperDTO } from '@/types/DTO'

defineProps<{
  info: DeveloperDTO
}>()
</script>

<style scoped lang="less">
.no-comment {
  padding: 1rem 0;
  text-align: center;

  p {
    font-size: 1.2rem;
    color: var(--color-theme);
  }
}

.developer-evaluation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comment-container {
  position: relative;
  max-width: 72%;
  padding: 16px 0px 0px;

  .comment {
    padding: 0 8px;
    font-size: 0.9rem;
    color: white;
    line-height: 1.7rem;
    letter-spacing: 0.5px;
  }

  .quotation-wrapper {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    .quotation {
      width: 12px;
      height: 12px;
    }

    &.up {
      transform: translate(-20%, -30%);
    }

    &.down {
      float: right;
      transform: translate(20%, 0) rotate(180deg);
    }
  }
}
</style>
