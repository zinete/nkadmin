<template>
  <div>
    <div>
      <button class="btn btn-primary" @click="reload">reload</button>
    </div>
    <br />

    <div class="video_player">
      <Video />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "index",
  methods: {
    reload: function () {
      location.reload();
    },
  },
});
</script>

<style scoped>
.video_player {
  width: 100%;
  height: 400px;
}
</style>
