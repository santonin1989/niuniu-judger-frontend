<template>
  <div class="top-navigation">
    <div class="title">Niuniu Judger</div>
    <div class="seven-niu">
      <img :src="niuniu" alt="logo" />
      <img :src="niuniu" alt="logo" />
      <img :src="niuniu" alt="logo" />
      <img :src="niuniu" alt="logo" />
      <img :src="niuniu" alt="logo" />
      <img :src="niuniu" alt="logo" />
      <img :src="niuniu" alt="logo" />
    </div>
    <div class="links">
      <a
        href="https://www.qiniu.com/activity/detail/66cfe17084a4441c29b08be9"
        target="_blank"
        >大赛官网</a
      >
      <a href="#" target="_blank">算法说明</a>
      <a href="#" target="_blank">GitHub</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import niuniu from '@/components/icons/niuniu.svg'
</script>

<style scoped lang="less">
.top-navigation {
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  user-select: none;

  .title:hover,
  .links a:hover {
    color: var(--color-theme);
    cursor: pointer;
  }

  .title {
    font-size: 2rem;
    color: var(--color-heading);
  }

  .seven-niu {
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;

    img {
      width: 28px;
      height: 28px;
    }
  }

  .links {
    display: flex;
    column-gap: 2rem;
    align-items: center;
    font-size: 1.1rem;

    a {
      color: white;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 992px) {
  .top-navigation {
    .title {
      font-size: 1.5rem;
    }
    .seven-niu img {
      width: 20px;
      height: 20px;
    }
    .links {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .top-navigation {
    .seven-niu {
      display: none;
    }
  }
}
</style>
