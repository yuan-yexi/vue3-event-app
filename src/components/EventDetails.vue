<script setup>
import EventService from '../services/EventService.js';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const event_id = route.params.id;

let event = ref(null);

const fetchEvent = (id) => {
  EventService.getEvent(id)
    .then((response) => {
      event.value = response.data;
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchEvent(event_id);
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <p>{{ event_id }}</p>
  </div>
</template>
