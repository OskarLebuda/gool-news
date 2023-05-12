<template>
  <div class="menu">
    <div class="list">
      <div class="item is-menu">
        <img src="/icon-hamburger.svg"/>
      </div>

      <div class="item is-home is-active">
        <img src="/icon-home.svg"/>
      </div>

      <div class="item is-profile">
        <img src="/icon-user.svg"/>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

  .menu {
    padding: 12px 25px;
    background: #fff;
    filter: drop-shadow(0px -3px 10px rgba(0, 0, 0, 0.078));
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  .menu .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 100%;
  }

  .item img {
    width: 24px;
    height: 24px;
  }

  .item.is-active {
    background: rgba(83, 157, 243, 0.37);
  }

</style>
  