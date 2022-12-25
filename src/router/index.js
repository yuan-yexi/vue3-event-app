import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventListView.vue';
import EventDetails from '../components/EventDetails.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventListView',
      component: EventList,
    },
    {
      path: '/events/:id',
      name: 'EventDetails',
      component: EventDetails,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
});

export default router;
