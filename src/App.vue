<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeditationStore } from './stores/meditation.store.ts';
import CardList from './components/CardList.vue';

const meditations = useMeditationStore();

onMounted(async () => {
  await meditations.fetchData();
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
