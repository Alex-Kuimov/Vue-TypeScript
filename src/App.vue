<script setup lang="ts">

const fetchMeditation = async () => {
  const response = await fetch('http://localhost:3000/api/meditations');
  const data = await response.json();
  console.log(data);
}

fetchMeditation();

</script>

<template>
  <header>
  </header>

  <main>
  </main>
</template>

<style scoped></style>
