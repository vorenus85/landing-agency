<template>
  <div class="about-us-section">
    <div class="container mx-auto" id="about-us">
      <div class="about-us-module">
        <div class="module-head">
          <h2 class="module-title" v-html="title"></h2>
          <div class="module-description" v-html="description"></div>
        </div>
        <div class="module-body">
          <div class="video-container">
            <img
              class="video_cover"
              :alt="video?.alt"
              :src="imageUrl(video?.cover, '')"
              :width="video?.width"
              :height="video?.height"
            />
            <img
              class="play-btn"
              alt="play video"
              :src="imageUrl('play.png', '')"
              :width="150"
              :height="150"
            />
          </div>
        </div>
      </div>
    </div>
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
  padding: 55px 0;
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
    font-size: 32px;
    line-height: 1.5;
  }

  .module-description {
    font-size: 1.15rem;
  }
}

@media (min-width: 1024px) {
  .about-us-module {
    .module-title {
      font-size: 48px;
      line-height: 60px;
    }
  }
}
</style>
<style lang="scss">
.about-us-module .module-description {
  opacity: 0.7;
}

.about-us-module .module-body li {
  padding-left: 30px;
  position: relative;
  padding-bottom: 15px;
  &:before {
    content: '';
    height: 20px;
    width: 20px;
    display: block;
    position: absolute;
    left: 0;
    top: 3px;
    background-image: url('/esetup/images/check.svg');
  }
}
</style>
