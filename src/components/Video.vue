<!-- Please remove this file from your project -->
<template>
  <div class="containerVideo">
    <client-only>
      <video-player
        class="containerVideo"
        ref="videoPlayer"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @ready="onPlayerReady($event)"
      />
    </client-only>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Video",
  setup() {},
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "192.168.1.105:5001",
  },
  data() {
    return {
      src: `http://192.168.1.105:5001/QmdjCnuo9bXt86R46W8jvVdhmwGGqzBsUJbMcZPHMgiY7P.m3u8`,
      playerOptions: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },

        muted: "muted",
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    onPlayerPlay(player) {},
    onPlayerReady(player) {},
    playVideo: function (source) {
      const player = this.$refs.videoPlayer.player;
      const video = {
        withCredentials: false,
        type: "application/x-mpegurl",
        src: source,
      };
      player.reset(); // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      player.src(video);
      // this.player.load()
      player.play();
    },

    switchPlayer: function () {
      this.playVideo(this.src);
    },
  },

  mounted() {
    setTimeout(() => {
      this.playVideo(this.src);
    }, 500);
  },
});
</script>

<style scoped>
.containerVideo {
  width: 100%;
  height: 100%;
}
</style>
