import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Meditation } from '../interfaces/meditation.interface.ts';


export const useMeditationStore = defineStore('meditation', () => {
    const meditations = ref<Meditation[]>([]);
    const isLoading = ref<boolean>(false);

    return { meditations, isLoading };
});