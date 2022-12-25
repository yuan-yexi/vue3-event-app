<script setup>
import EventCard from '../components/EventCard.vue';
import EventService from '../services/EventService.js';
import { ref } from 'vue';

let events = ref(null);

const fetchEvents = () => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data;
      console.log(events.value);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchEvents();
</script>

<template>
  <main>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </main>
</template>
