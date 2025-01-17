<template>
  <div class="hero-section container mx-auto relative">
    <div class="hero-module py-5 lg:py-8 text-center mx-auto">
      <div class="hero-top">
        <div class="hero-title pb-5">
          <h1 v-html="heroTitle"></h1>
        </div>
        <div class="hero-description px-5 md:px-0">
          <div class="hero-description-text pb-5" v-html="description"></div>
          <div class="hero-btn-container flex justify-center pt-3">
            <Button
              :label="cta"
              variant="primary"
              @mouseover="ctaMouseOver"
              @mouseleave="ctaMouseLeave"
            ></Button>
          </div>
        </div>
      </div>
    </div>

    <img
      class="symbol symbol-1 hidden md:block absolute float-animation-2"
      :class="symbol1Class"
      alt="floating symbol 1"
      :src="imageUrl('symbol_1.png', '')"
      :width="99"
      :height="32"
    />
    <img
      class="symbol symbol-2 hidden md:block absolute float-animation-3"
      :class="symbol2Class"
      alt="floating symbol 2"
      :src="imageUrl('symbol_2.png', '')"
      :width="51"
      :height="60"
    />
    <img
      class="symbol symbol-3 hidden md:block absolute float-animation-3"
      :class="symbol3Class"
      alt="floating symbol 3"
      :src="imageUrl('symbol_3.png', '')"
      :width="105"
      :height="121"
    />

    <img
      class="symbol symbol-4 hidden md:block absolute float-animation-2"
      :class="symbol4Class"
      alt="floating symbol 4"
      :src="imageUrl('symbol_4.png', '')"
      :width="104"
      :height="104"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useImageUrl } from '../../composables/useImageUrl.js'
import moduleData from '../../mock-data/heroModule.json'
import Button from '../Button.vue'
const { imageUrl } = useImageUrl()
const heroTitle = ref(null)
const description = ref(null)
const cta = ref(null)
const banner = ref({ alt: '', image: '' })

const symbol1Class = ref('')
const symbol2Class = ref('')
const symbol3Class = ref('')
const symbol4Class = ref('')

const ctaMouseOver = () => {
  symbol1Class.value = 'symbol-1-hovered'
  symbol2Class.value = 'symbol-2-hovered'
  symbol3Class.value = 'symbol-3-hovered'
  symbol4Class.value = 'symbol-4-hovered'
}

const ctaMouseLeave = () => {
  symbol1Class.value = ''
  symbol2Class.value = ''
  symbol3Class.value = ''
  symbol4Class.value = ''
}

onMounted(() => {
  heroTitle.value = moduleData.data.title
  description.value = moduleData.data.description
  cta.value = moduleData.data.cta
  banner.value = moduleData.data.banner
})
</script>

<style lang="scss" scoped>
.hero-section {
  .hero-title h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.5;
  }

  .hero-top {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.symbol {
  transition: all 0.2s;
}

.symbol-1 {
  top: 80px;
  left: 0;

  &-hovered {
    top: 120px;
    left: 40px;
  }
}

.symbol-2 {
  bottom: 20px;
  left: 50px;

  &-hovered {
    bottom: 60px;
    left: 90px;
  }
}

.symbol-3 {
  top: 80px;
  right: 0;

  &-hovered {
    top: 120px;
    right: 40px;
  }
}

.symbol-4 {
  bottom: 30px;
  right: 30px;

  &-hovered {
    bottom: 70px;
    right: 70px;
  }
}

.hero-description-text {
  line-height: 39px;
  font-size: 21px;
  letter-spacing: -0.6565263867378235px;
}

@media (min-width: 1024px) {
  .hero-section {
    .hero-top {
      padding: 3rem 0;
    }

    .hero-title h1 {
      font-size: 72px;
      line-height: 80px;
    }
  }

  .hero-module {
    max-width: 625px;
  }
}
</style>
