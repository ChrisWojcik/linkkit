import Vue from 'vue';
import Router from 'vue-router';

import LayoutDefault from '@/layouts/LayoutDefault.vue';
import ThreadList from '@/components/ThreadList.vue';
import PageNotFound from '@/components/PageNotFound.vue';

Vue.use(Router);

const createRouter = () => {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: [
      { path: '/', component: ThreadList, meta: { layout: LayoutDefault } },
      { path: '*', component: PageNotFound, meta: { layout: LayoutDefault } }
    ]
  });
};

export default createRouter;
