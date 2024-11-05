<template>
  <div class="developer-evaluation">
    <!-- 开发者评价 -->
    <div class="comment-container">
      <div class="quotation-wrapper up">
        <img class="quotation" :src="quotation" />
      </div>
      <div class="comment" ref="commentElement">
        我是对开发者的评价啊啊啊啊啊我是对开发者的评价啊啊啊啊啊我是对开发者的评价啊啊啊啊啊我是对开发者的评价啊啊啊啊啊
      </div>
      <div class="quotation-wrapper down">
        <img class="quotation" :src="quotation" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import quotation from '@/components/icons/quotation.svg'
</script>

<style scoped lang="less">
.developer-evaluation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comment-container {
  position: relative;
  width: 72%;
  min-width: 108px;
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
