<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeditationStore } from './stores/meditation.store.ts';
import type { Meditation } from './interfaces/meditation.interface.ts';
import { api, API_ENDPOINTS } from './api.ts';

const meditations = useMeditationStore();

const fetchMeditations = async () => {
  meditations.isLoading = true;

  try {
    const { data } = await api.get<Meditation[]>(API_ENDPOINTS.MEDITATIONS);
    meditations.data = data;
  } catch (error) {
    console.error('Error fetching meditations:', error);
  } finally {
    meditations.isLoading = false;
  }
};


onMounted(() => {
  fetchMeditations();
});

</script>

<template>
  <header>
  </header>

  <main>


  </main>
</template>

<style scoped></style>
