<template>
  <div class="niuniu-loading">
    <div class="niuniu">
      <img class="img" src="/one-bull.svg" alt="niuniu" />
    </div>
    <div class="circle"></div>
  </div>
</template>

<style lang="less" scoped>
.niuniu-loading {
  width: 100%;
  height: 100%;
  padding-top: var(--padding-top);
  position: relative;
  --padding-top: 6rem;
  --niu-size: 4rem;

  .niuniu {
    margin: 0 auto;
    width: 4rem;
    height: 6rem;
    transform-origin: bottom center;
    animation: rotate 1.2s linear infinite;

    .img {
      width: 4rem;
      height: 4rem;
    }
  }

  .circle {
    position: absolute;
    top: calc(var(--padding-top) + 3rem);
    left: 50%;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 12px solid var(--color-theme);
    transform: translate(-50%, 0);
    opacity: 0.72;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
