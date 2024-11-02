<template>
  <div class="search-box">
    <div class="container">
      <div class="tabs">
        <input type="radio" name="tabs" id="tab1" checked />
        <label for="tab1">开发者</label>
        <input type="radio" name="tabs" id="tab2" />
        <label for="tab2">领域</label>
      </div>
      <div class="search-input">
        <form class="form" @submit.prevent="search">
          <input
            v-model="userInput"
            class="input"
            type="text"
            placeholder="搜索开发者或领域"
          />
          <div class="icon-container">
            <div class="clear-btn">清除</div>
            <img @click="search" class="icon" :src="searchIcon" alt="搜索" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import searchIcon from '@/components/icons/search.svg'
import { ref } from 'vue'

const userInput = ref('')
const search = () => {
  console.log(userInput.value)
}
</script>

<style scoped lang="less">
.search-box {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    max-width: 600px;
    width: 100%;
  }

  .tabs {
    display: flex;
    margin-bottom: 16px;
    font-size: 0.9rem;
    height: 2rem;
    position: relative;
    isolation: isolate;
    --active: 0;
    --tab-width: 100px;
    --active-width: 80px;
    user-select: none;

    input {
      display: none;
    }

    label {
      font-weight: normal;
      width: var(--tab-width);
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input:checked + label {
      color: var(--color-theme);
    }

    &::after {
      pointer-events: none;
      position: absolute;
      content: '';
      inset: 0 calc((var(--tab-width) - var(--active-width)) / 2) -1px;
      background: linear-gradient(
        180deg,
        rgba(9, 254, 235, 0.43) 0%,
        rgba(5, 152, 141, 0.0258) 100%
      );
      z-index: -1;
      width: var(--active-width);
      border-radius: 0.5rem 0.5rem 0 0;

      transform: translateX(calc(var(--active) * var(--tab-width)));
      transition: transform 0.3s ease-in-out;
    }

    &:has(:checked:nth-of-type(1)) {
      --active: 0;
    }

    &:has(:checked:nth-of-type(2)) {
      --active: 1;
    }
  }

  .search-input {
    width: 100%;
    height: 48px;
    background-color: var(--color-background);
    border-radius: 30px;
    border: var(--border);
    display: flex;
    align-items: center;
    box-sizing: border-box;

    .form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 4px 0px 12px;
      box-sizing: border-box;
    }

    input {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 1rem;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    .icon-container {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      column-gap: 12px;

      .clear-btn {
        font-size: 1rem;
        cursor: pointer;
        user-select: none;

        &:hover {
          color: var(--color-theme);
        }
      }

      .icon {
        width: 36px;
        height: 36px;
        cursor: pointer;
      }
    }

    .icon {
      width: 36px;
      height: 36px;
      cursor: pointer;
    }
  }
}
</style>
