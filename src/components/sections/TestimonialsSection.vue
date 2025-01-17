<template>
  <div class="testimonial-section relative z-20 pb-20 pt-10" id="testimonial">
    <div class="container mx-auto">
      <div class="testimonial-module">
        <div class="module-head">
          <h2 class="module-title pb-5">{{ title }}</h2>
          <h3 class="module-subtitle text-center pb-10">{{ subTitle }}</h3>
        </div>
        <div class="module-body"></div>
      </div>
      <div class="review-list relative">
        <div class="prev carousel-nav hidden md:flex" @click="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
          >
            <path
              d="M19.6958 7.43548H2.48568M2.48568 7.43548C2.48568 7.43548 7.36397 4.22725 8.35524 1.56592M2.48568 7.43548C2.48568 7.43548 6.79826 10.45 8.35524 13.305"
              stroke="#1E1E1E"
              stroke-width="2.17391"
              stroke-linecap="square"
            />
          </svg>
        </div>
        <div class="next carousel-nav hidden md:flex" @click="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
          >
            <path
              d="M1.3042 7.43548H18.5143M18.5143 7.43548C18.5143 7.43548 13.636 4.22725 12.6448 1.56592M18.5143 7.43548C18.5143 7.43548 14.2017 10.45 12.6448 13.305"
              stroke="#1E1E1E"
              stroke-width="2.17391"
              stroke-linecap="square"
            />
          </svg>
        </div>
        <Carousel v-bind="carouselConfig" ref="carouselRef">
          <Slide class="review" v-for="review in reviews" :key="review.id">
            <div class="review-item">
              <div class="review-image-wrapper relative z-10 flex items-center justify-center pb-3">
                <img
                  class="review-image"
                  :alt="review?.name"
                  :src="imageUrl(review?.image, folder)"
                  loading="lazy"
                  :width="50"
                  :height="50"
                />
              </div>
              <div class="review-name py-1">{{ review.name }}</div>
              <div class="review-role py-1">{{ review.role }}</div>
              <div class="review-content pt-3 pb-5">{{ review.content }}</div>
            </div></Slide
          ></Carousel
        >
      </div>
    </div>
    <img
      class="symbol absolute hidden md:block z-0"
      alt="symbol"
      :src="imageUrl('symbol_6.png', '')"
      :width="123"
      :height="123"
    />
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/testimonialSection.json'
import { onMounted, ref } from 'vue'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { useImageUrl } from '@/composables/useImageUrl.js'
const folder = 'reviews/'
const { imageUrl } = useImageUrl()

const title = ref(null)
const subTitle = ref(null)
const reviews = ref([])

const next = () => {
  carouselRef.value.next()
}
const prev = () => {
  carouselRef.value.prev()
}

const carouselRef = ref()

const carouselConfig = {
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: true,
  snapAlign: 'center',
  // breakpoints are mobile first
  // any settings not specified will fallback to the carousel settings
  breakpoints: {
    // 200px and up
    576: {
      itemsToShow: 1
    },
    // 400px and up
    768: {
      itemsToShow: 2
    },
    992: {
      itemsToShow: 3
    }
  }
}

onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
  reviews.value = moduleData.data.reviews
})
</script>

<style lang="scss" scoped>
.testimonial-module {
  .module-title {
    font-size: 18px;
    line-height: 26.01px;
    letter-spacing: 0.175em;
    text-transform: uppercase;
    font-weight: 400;
  }

  .module-subtitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 1.5;
  }
}

.carousel-nav {
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  bottom: 75px;

  &.prev {
    left: 0;
  }
  &.next {
    right: 0;
  }

  &:hover {
    &.prev svg {
      transform: translateX(-5px);
    }

    &.next svg {
      transform: translateX(5px);
    }
  }

  svg {
    transition: all 0.2s;
  }
}

.symbol {
  top: 0;
  right: 20px;
}

.review-list {
  .review {
    padding: 0 1rem;
  }

  .review-item {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 20px;
    padding: 1rem;
    position: relative;
    color: #1e1e1e;

    &:before {
      content: '';
      width: 86px;
      height: 32px;
      background: url('/landing-agency/images/reviewer_bg.png');
      display: block;
      position: absolute;
      top: -32px;
      left: calc(50% - 43px);
    }
  }

  .review-image {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 100%;
  }

  .review-image-wrapper {
    margin-top: -38px;
  }

  .review-name {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }

  .review-role {
    font-size: 12px;
    line-height: 17.34px;
    opacity: 0.7;
  }

  .review-content {
    font-size: 14px;
    line-height: 20.23px;
    opacity: 0.8;
  }

  .carousel__viewport {
    padding-top: 35px;
  }
}

@media (min-width: 1024px) {
  .testimonial-module {
    .module-subtitle {
      font-size: 42px;
      line-height: 60.69px;
    }
  }

  .review-list {
    padding: 0 80px;
  }
}
</style>

<style lang="scss">
.review-list {
  .carousel__viewport {
    padding-top: 35px;
  }
}
</style>
