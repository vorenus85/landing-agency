<template>
  <div class="about-us-section mb-5 relative">
    <div class="container mx-auto relative z-10" id="about-us">
      <div class="about-us-module px-0 md:px-5">
        <div class="module-head flex flew-wrap pb-10 pt-0 md:pt-5 flex-col md:flex-row">
          <h2 class="module-title" v-html="title"></h2>
          <div
            class="module-description text-center md:text-left ml-0 md:ml-auto"
            v-html="description"
          ></div>
        </div>
        <div class="module-body">
          <div class="video-container relative">
            <img
              class="video_cover"
              :alt="video?.alt"
              :src="imageUrl(video?.cover, '')"
              :width="video?.width"
              :height="video?.height"
            />
            <img
              class="video-play-btn absolute z-10 jelly-animation"
              alt="play video"
              :src="imageUrl('play.png', '')"
              :width="150"
              :height="150"
            />
          </div>
        </div>
      </div>
    </div>
    <img
      class="video-glow absolute hidden md:block z-0"
      alt="video glow"
      :src="imageUrl('glow_1.png', '')"
      :width="1152"
      :height="1514"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '../../mock-data/aboutUsSection.json'
import { useImageUrl } from '@/composables/useImageUrl.js'
const { imageUrl } = useImageUrl()

const title = ref(null)
const description = ref(null)
const video = ref(null)
onMounted(() => {
  title.value = moduleData.data.title
  video.value = moduleData.data.video
  description.value = moduleData.data.description
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.about-us-section {
  padding: 25px 0;
}

.about-us-module {
  .module-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .module-title {
    color: $body-text-color;
    font-size: 26px;
    line-height: 1.5;
  }

  .module-description {
    font-size: 1.15rem;
    line-height: 39px;
    letter-spacing: -0.6565263867378235px;
    flex: 0 0 33%;
  }
}

.video-glow {
  top: -400px;
  left: 0;
}

.video-play-btn {
  // todo simple pulse effect
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transform-origin: center;
  max-width: 50px;
}

@media (min-width: 1024px) {
  .about-us-module {
    .module-title {
      font-size: 60px;
      line-height: 70px;
    }

    .module-description {
      padding-left: 75px;
    }
  }

  .video-play-btn {
    max-width: initial;
  }

  .about-us-section {
    padding: 55px 0;
  }
}
</style>
