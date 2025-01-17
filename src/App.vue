<script setup>
import AboutUsSection from './components/sections/AboutUsSection.vue'
import ContactUsSection from './components/sections/ContactUsSection.vue'
import HeaderSection from './components/sections/HeaderSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
</script>

<template>
  <HeaderSection /> <AboutUsSection /><ServicesSection /><TestimonialsSection />
  <ContactUsSection />
</template>
<style lang="scss">
body {
  font-family: 'Jost', serif;
}
</style>
