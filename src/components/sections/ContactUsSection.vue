<template>
  <div class="contact-us-section relative mt-10 pt-10">
    <div class="container mx-auto pb-10 relative" id="contact-us">
      <div class="contact-us-module">
        <div class="module-head pb-5 pt-10">
          <h2 class="module-title mx-auto">{{ title }}</h2>
        </div>
        <div class="module-body">
          <div class="contact-us-form mx-auto pt-5 mb-5">
            <form
              class="flex gap-2 flex-col md:flex-row"
              @submit.prevent="submitForm"
              autocomplete="off"
            >
              <div class="form-element w-full">
                <input
                  class="w-full form-input"
                  id="email"
                  type="email"
                  v-model="email"
                  @blur="validateEmail"
                  :placeholder="form?.emailPlaceholder"
                />
                <div class="form-text py-2">
                  <span v-if="emailSuccess" class="text-green-500">{{ emailSuccess }}</span>
                  <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
                </div>
              </div>

              <Button variant="secondary" type="submit" :label="form?.cta"></Button>
            </form>
          </div>
        </div>
        <img
          class="floating-element-1 float-animation-2 hidden lg:block"
          loading="lazy"
          alt="floating symbol"
          :src="imageUrl('symbol_7.webp', '')"
          width="89"
          height="94"
        />
        <img
          class="floating-element-2 float-animation-3 hidden lg:block"
          loading="lazy"
          alt="floating symbol"
          :src="imageUrl('symbol_8.webp', '')"
          width="70"
          height="70"
        />
      </div>
    </div>
    <div class="container mx-auto pt-5 footer-menu" id="footer-menu">
      <FooterModule />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '@/mock-data/contactUsSection.json'
import FooterModule from '../modules/FooterModule.vue'
import Button from '../Button.vue'
import { useEmailValidation } from '@/composables/useEmailValidation'
import { useImageUrl } from '../../composables/useImageUrl.js'

const { imageUrl } = useImageUrl()

const { email, emailError, emailSuccess, validateEmail } = useEmailValidation()
const title = ref(null)
const description = ref(null)
const form = ref(null)

const submitForm = () => {
  console.log('submitForm fired')
  validateEmail()
}

onMounted(() => {
  title.value = moduleData.data.title
  description.value = moduleData.data.description
  form.value = moduleData.data.form
})
</script>

<style lang="scss" scoped>
.floating-element-1 {
  position: absolute;
  left: -20px;
  top: -20px;
}

.floating-element-2 {
  position: absolute;
  right: 10px;
  top: -10px;
}

.contact-us-section {
}

.contact-us-module {
  background: #fff;
  border-radius: 80px 20px 20px 20px;
  padding: 1rem;
  .module-title {
    color: #1e1e1e;
    font-size: 18px;
    line-height: 1.5;
    text-wrap: initial;
  }
}

.contact-us-form .btn {
  --btn-min-width: 160px;
  --btn-height: 60px;
  font-weight: 400;
}

.contact-us-form {
  max-width: 555px;
}

@media (min-width: 1024px) {
  .contact-us-section {
  }

  .contact-us-module {
    border-radius: 130px 20px 20px 20px;
    .module-title {
      font-size: 33px;
      line-height: 54px;
      max-width: 760px;
    }
  }
}
</style>
