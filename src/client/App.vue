<template>
  <div id="app">
    <main-nav />
    <main id="content">
      <thread-list />
    </main>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import ThreadList from '@/components/ThreadList.vue';

export default {
  components: {
    MainNav,
    ThreadList
  }
};
</script>
