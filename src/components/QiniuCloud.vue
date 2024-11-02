<template>
  <div class="bg-img">
    <img
      v-for="i in nius"
      :key="i"
      :class="'niu niu-' + i"
      src="/一头牛.svg"
      alt="一头牛"
    />
    <img class="cloud" src="/一朵云.png" alt="一朵云" />
  </div>
</template>

<script setup lang="ts">
const nius = [1, 2, 3, 4, 5, 6, 7]
</script>

<style lang="less" scoped>
.bg-img {
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  z-index: -1;
  width: 72vw;
  min-width: 680px;
  max-width: 1000px;
  padding: 0;
  margin: 0;
  height: 50vh;

  .cloud {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }

  .niu {
    cursor: pointer;
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: -100vh;
    animation-duration: 1200ms;
    animation-timing-function: cubic-bezier(0.52, 1, 0.74, 1);
    animation-fill-mode: forwards;
    animation-delay: 500ms;
  }

  .niu-1 {
    animation-name: rotateAppear01;
  }

  .niu-2 {
    animation-name: rotateAppear02;
  }

  .niu-3 {
    animation-name: rotateAppear03;
  }

  .niu-4 {
    animation-name: rotateAppear04;
  }

  .niu-5 {
    animation-name: rotateAppear05;
  }

  .niu-6 {
    animation-name: rotateAppear06;
  }

  .niu-7 {
    animation-name: rotateAppear07;
  }
}

@keyframes rotateAppear01 {
  from {
    transform: rotate(0deg);
    bottom: 0;
    left: 50%;
    scale: 0.5;
  }
  to {
    transform: rotate(300deg);
    bottom: 58vh;
    left: 18%;
    scale: 1.1;
  }
}

@keyframes rotateAppear02 {
  from {
    transform: rotate(0deg);
    bottom: 0;
    left: 50%;
    scale: 0.5;
  }
  to {
    transform: rotate(130deg);
    bottom: 30vh;
    left: 30%;
    scale: 1;
  }
}

@keyframes rotateAppear03 {
  from {
    transform: rotate(0deg);
    bottom: 0;
    left: 50%;
    scale: 0.5;
  }
  to {
    transform: rotate(220deg);
    bottom: 50vh;
    left: 42%;
    scale: 1;
  }
}

@keyframes rotateAppear04 {
  from {
    transform: rotate(0deg);
    bottom: 0;
    left: 50%;
    scale: 0.5;
  }
  to {
    transform: rotate(372deg);
    bottom: 64vh;
    left: 58%;
    scale: 1.1;
  }
}

@keyframes rotateAppear05 {
  from {
    transform: rotate(0deg);
    bottom: 0;
    left: 50%;
    scale: 0.5;
  }
  to {
    transform: rotate(320deg);
    bottom: 50vh;
    left: 76%;
    scale: 1.1;
  }
}

@keyframes rotateAppear06 {
  from {
    transform: rotate(0deg);
    bottom: 0;
    left: 50%;
    scale: 0.5;
  }
  to {
    transform: rotate(320deg);
    bottom: 17vh;
    left: 40%;
    scale: 0.7;
  }
}

@keyframes rotateAppear07 {
  from {
    transform: rotate(0deg);
    bottom: 0;
    left: 50%;
    scale: 0.5;
  }
  to {
    transform: rotate(420deg);
    bottom: 28vh;
    left: 54%;
    scale: 0.8;
  }
}
</style>
