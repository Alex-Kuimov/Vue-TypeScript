<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeditationStore } from '../stores/meditation.store.ts';
import CardList from '../components/CardList.vue';
import UserProfile from '../components/UserProfile.vue';

const meditations = useMeditationStore();

onMounted(async () => {
    await meditations.fetchData();
});
</script>

<template>
    <CardList />
    <UserProfile />
</template>

<style scoped></style>
