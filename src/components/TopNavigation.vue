<template>
  <div class="top-navigation">
    <div @click="goHome" class="title">Niuniu Judger</div>
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
      <div class="github">
        <a href="#" target="_blank">GitHub</a>
        <div class="dropdown">
          <a
            href="https://github.com/santonin1989/niuniu-judger-frontend"
            target="_blank"
            >前端</a
          >
          <a href="https://github.com/Cihnomi/NiuniuJudger" target="_blank"
            >后端</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import niuniu from '@/components/icons/niuniu.svg'

const goHome = () => {
  window.location.href = '/'
}
</script>

<style scoped lang="less">
.top-navigation {
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  user-select: none;

  .github {
    position: relative;

    &:hover {
      .dropdown {
        display: flex;
      }
    }

    .dropdown {
      display: none;
      z-index: 999;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: var(--color-background-half);
      backdrop-filter: var(--blur);
      padding: 1rem;
      flex-direction: column;
      row-gap: 20px;

      a {
        font-size: 1rem;
        white-space: nowrap;
      }
    }
  }

  .title,
  .links a {
    transition: color 0.3s ease-out;
  }

  .title:hover,
  .links a:hover {
    color: var(--color-theme);
    cursor: pointer;
    &::after {
      width: 100%;
    }
  }

  .title::after,
  .links a::after {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background-color: var(--color-theme);
    transition: width 0.3s ease-in-out;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-heading);
  }

  .seven-niu {
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;

    img {
      width: 24px;
      height: 24px;
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
