<template>
  <div id="app" tabindex="-1">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$nextTick(function() {
        this.$el.focus();
      });
    }
  }
}
</script>
