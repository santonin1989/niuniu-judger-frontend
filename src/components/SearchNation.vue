<template>
  <div @click="emit('closeSearch')" class="search-nation">
    <div @click.stop class="search-container">
      <h2 class="title">筛选国家</h2>
      <form class="form" @submit.prevent="search">
        <input
          v-model="userInput"
          class="input"
          type="text"
          placeholder="请输入国家名称"
          maxlength="10"
        />
        <div class="icon-container">
          <div @click="search" class="clear-btn">搜索</div>
        </div>
      </form>
      <div v-if="resultList.length > 0" class="result-list">
        <div
          @click="emit('searchNation', item.name)"
          v-for="item in resultList"
          :key="item.enName"
          class="item"
        >
          <div style="flex-shrink: 0">{{ item.name }}</div>
          <div>{{ item.fullname }}</div>
          <div>{{ item.enName }}</div>
        </div>
      </div>
      <div v-else class="no-result">暂无搜索结果</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-nation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  .search-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 450px;
    height: 500px;
    background-color: var(--color-background);
    border: var(--border);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  }
}

.title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: white;
  user-select: none;
  letter-spacing: 0.5px;
}

.form {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  border-bottom: var(--border);
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

.result-list {
  height: 348px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  .item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 12px;
    border-radius: 8px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.16);
      cursor: pointer;
    }

    div {
      margin-right: 15px;
    }
  }
}

.no-result {
  font-size: 0.9rem;
  margin-top: 20px;
  text-align: center;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import countries from '@/static/countries.json'

const emit = defineEmits(['searchNation', 'closeSearch'])

type Country = {
  name: string
  fullname: string
  enName: string
}

const resultList = ref<Country[]>([])
const userInput = ref('')

const search = () => {
  const input = userInput.value.trim().toLowerCase()
  if (input === '') {
    resultList.value = []
    return
  } else {
    // 存储匹配的国家
    const matchedCountries = countries.filter(country => {
      return (
        country.name.toLowerCase().includes(input) ||
        country.fullname.toLowerCase().includes(input) ||
        country.enName.toLowerCase().includes(input)
      )
    })
    console.log(matchedCountries)
    resultList.value = matchedCountries
    return matchedCountries
  }
}
</script>
