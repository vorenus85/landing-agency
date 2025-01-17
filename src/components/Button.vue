<template>
  <button class="btn" :type="type" :class="btnVariant">{{ label }}</button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'button',
    validator: value => {
      const available = ['button', 'submit']
      return available.includes(value)
    }
  },
  variant: {
    type: String,
    default: 'secondary',
    validator: value => {
      const available = ['secondary', 'primary', 'secondary-outlined', 'primary-outlined']
      return available.includes(value)
    }
  }
})

const btnVariant = computed(() => {
  return 'btn-' + props.variant
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

@mixin btn-glow-effect {
  &:after {
    background: #fff;
    content: '';
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }
}

@mixin btn-glow-effect-hover {
  &:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.btn {
  --btn-min-width: 160px;
  --btn-height: 55px;
  font-size: 1.15rem;
  min-width: var(--btn-min-width);
  line-height: var(--btn-height);
  text-align: center;
  height: var(--btn-height);
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  background: transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    opacity: 0.9;
  }

  &:active,
  &:focus {
    opacity: 0.8;
  }

  &-secondary {
    color: #fff;
    background: $secondary-color;
    @include btn-glow-effect;

    &:hover {
      @include btn-glow-effect-hover;
    }
  }

  &-secondary-outlined {
    border: 2px solid $secondary-color;
    color: $secondary-color;

    &:hover {
      color: #fff;
      background: $secondary-color;
    }
  }

  &-primary {
    color: #fff;
    background: $primary-color;
    @include btn-glow-effect;

    &:hover {
      @include btn-glow-effect-hover;
    }
  }

  &-primary-outlined {
    border: 2px solid $primary-color;
    color: $primary-color;

    &:hover {
      color: #fff;
      background: $primary-color;
    }
  }
}
</style>
