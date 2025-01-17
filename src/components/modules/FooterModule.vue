<template>
  <div class="footer-section">
    <div class="container mx-auto">
      <div class="footer-module flex items-center justify-start flex-col md:flex-row">
        <Logo variant="light" class="mt-5 md:mt-0 order-1 md:order-1 md:mr-auto mb-5 md:mb-0" />
        <Menu class="order-1 md:order-2 footer-menu m-5 md:mx-5" />
        <div class="copyright order-1 md:order-3 md:ml-5 mt-5 md:mt-0">
          © 2020 Agency, All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from '../Logo.vue'
import Menu from './Menu.vue'
</script>

<style lang="scss" scoped>
.footer-section {
  padding: 40px 0;
}
</style>
<style>
.footer-menu .menu-item {
  color: #fff;
}
</style>
