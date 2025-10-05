<script setup lang="ts">
import { useMeditationStore } from '../stores/meditation.store.ts';
import CardItem from './CardItem.vue';

const meditations = useMeditationStore();

</script>
<template>
    <div v-if="meditations.isLoading">Loading...</div>
    <div v-else-if="meditations.error" class="error">
        {{ meditations.error }}
    </div>
    <div v-else class="card-list">
        <CardItem v-for="meditation in meditations.data" :key="meditation.id" :meditation="meditation" />
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
}

.error {
    color: red;
    padding: 16px;
    text-align: center;
}
</style>
