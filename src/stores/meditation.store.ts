import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Meditation } from '../interfaces/meditation.interface.ts';
import { api, API_ENDPOINTS } from '../api.ts';

export const useMeditationStore = defineStore('meditation', () => {
    const data = ref<Meditation[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const fetchData = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await api.get<{ meditations: Meditation[] }>(API_ENDPOINTS.MEDITATIONS);
            data.value = response.data.meditations;
        } catch (err) {
            error.value = 'Failed to fetch meditations. Please try again later.';
            console.error('Error fetching meditations:', err);
        } finally {
            isLoading.value = false;
        }
    };

    return { data, isLoading, error, fetchData };
});