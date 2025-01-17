<template>
  <div class="services-section pb-10 relative z-10 pt-5">
    <div class="container mx-auto relative z-10" id="services">
      <div class="module grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="services-module text-center md:text-left">
          <div class="module-head">
            <h2 class="module-title pb-5">{{ title }}</h2>
            <h3 class="module-subtitle pb-8">{{ subTitle }}</h3>
          </div>
          <div class="module-body">
            <a href="#testimonial" class="see-more tertiary-color underline">See More</a>
            {{ description }}
          </div>
        </div>
        <div
          class="services-list grid grid-cols-1 md:grid-cols-2 gap-8 px-5 pt-5 md:pt-10 lg:pt-2 text-center md:text-left"
        >
          <div class="service pb-5" v-for="(service, index) in services" :key="service.id">
            <div
              class="service-icon-wrapper flex items-center justify-center md:justify-start pb-5"
            >
              <div class="service-icon flex justify-center pb-0 md:pb-5">
                <img
                  :class="`float-animation-${index + 1}`"
                  :alt="service.alt"
                  :src="imageUrl(service.icon, folder)"
                  loading="lazy"
                  :width="50"
                  :height="50"
                />
              </div>
            </div>
            <div class="service-name pb-5 secondary-color">{{ service.title }}</div>
            <div class="service-description pb-5 md:pr-5">{{ service.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <img
      class="glow absolute hidden md:block z-0"
      alt="glow"
      :src="imageUrl('glow_2.png', '')"
      :width="1092"
      :height="1514"
    />

    <img
      class="wave-symbol absolute hidden md:block z-0"
      alt="wave"
      :src="imageUrl('symbol_5.png', '')"
      :width="165"
      :height="81"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '../../mock-data/servicesSection.json'
import { useImageUrl } from '@/composables/useImageUrl.js'
const folder = 'services/'
const { imageUrl } = useImageUrl()

const title = ref(null)
const subTitle = ref(null)
const description = ref(null)
const services = ref([])
onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
  description.value = moduleData.data.description
  services.value = moduleData.data.services
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.services-module {
  .module-title {
    font-size: 28px;
    line-height: 1.5;
    color: #fff;
  }

  .module-subtitle {
    color: #ffffffb2;
    line-height: 1.5;
  }
}

.wave-symbol {
  left: 0;
  bottom: 50px;
}

.service-name {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.5;
}

.service-description {
  line-height: 1.5;
  color: #ffffffb2;
}

.glow {
  top: -400px;
  right: 0;
}

.see-more {
  &:hover {
    color: $secondary-color;
  }
}

@media (min-width: 1024px) {
  .services-module {
    .module-title {
      text-align: left;
      font-size: 60px;
      line-height: 65px;
      letter-spacing: 0.02em;
    }

    .module-subtitle {
      font-size: 1.25rem;
      line-height: 2;
      padding-right: 25%;
      text-wrap: auto;
    }
  }

  .see-more {
    font-size: 24px;
    font-weight: 500;
    line-height: 28.44px;
    letter-spacing: 0.02em;
  }

  .service-name {
    font-size: 24px;
    line-height: 34.68px;
  }

  .service-description {
    font-size: 18px;
    line-height: 32px;
  }
}
</style>
