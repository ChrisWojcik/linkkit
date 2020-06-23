<template>
  <div>
    <a
      href="#content"
      class="skip-link sr-only focusable"
    >
      Skip to main content
    </a>
    <main-nav />
    <main id="content">
      <slot />
    </main>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
  components: {
    MainNav
  }
}
</script>

<style lang="scss">
  .skip-link.focusable {
    &:focus {
      position: absolute;
      z-index: 1001;
      background: $white;
    }
  }
</style>
