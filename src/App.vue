<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeditationStore } from './stores/meditation.store.ts';
import type { Meditation } from './interfaces/meditation.interface.ts';
import { api, API_ENDPOINTS } from './api.ts';
import CardList from './components/CardList.vue';

const meditations = useMeditationStore();

const fetchMeditations = async () => {
  meditations.isLoading = true;

  try {
    const { data } = await api.get<{ meditations: Meditation[] }>(API_ENDPOINTS.MEDITATIONS);
    meditations.data = data.meditations;

  } catch (error) {
    console.error('Error fetching meditations:', error);
  } finally {
    meditations.isLoading = false;
  }
};

onMounted(async () => {
  await fetchMeditations();
});

</script>

<template>
  <header>
  </header>
  <main>
    <CardList />
  </main>
</template>

<style scoped></style>
