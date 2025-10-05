<script setup lang="ts">
import HeaderWidget from './widgets/HeaderWidget.vue';
</script>

<template>
  <header>
    <HeaderWidget />
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
