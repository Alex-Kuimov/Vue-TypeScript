<script setup lang="ts">
import type { Meditation } from '../interfaces/meditation.interface.ts';

interface Props {
  meditation: Meditation
}

defineProps<Props>();
</script>

<template>
  <div class="card-item">
    <h3>{{ meditation.title }}</h3>
    <p>{{ meditation.description }}</p>
    <p>Duration: {{ meditation.duration_min }} minutes</p>
  </div>
</template>

<style scoped>
.card-item {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.card-item h3 {
  margin-top: 0;
  color: #333;
}

.card-item p {
  color: #666;
  margin: 8px 0;
}
</style>