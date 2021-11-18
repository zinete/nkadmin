<template>
  <div class="list">
    <div class="add_new">
      <el-button type="warning">新建</el-button>
    </div>
    <table-list></table-list>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style lang="scss" scoped>
.list {
  padding: 20px;
}
.add_new {
  margin: 0px 0px 10px 0px;
}
</style>
