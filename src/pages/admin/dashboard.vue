<template>
  <div>
    <div class="dashboard">
      <div v-for="item in 8" :key="item.id">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding: 20px;
  div {
    width: 24%;
    height: 200px;
    padding: 20px;
    margin-bottom: 20px;
    background: #1b1b1b;
    color: #fff;
  }
}
</style>
