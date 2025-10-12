<script setup lang="ts">

</script>

<template>
    <header class="header">
        <div class="header-menu">
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/stat">Статистика</RouterLink>
            <RouterLink to="/register">Регистрация</RouterLink>
            <RouterLink to="/login">Вход</RouterLink>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: #f8f9fa;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
}

.header-menu {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.header-menu a {
    text-decoration: none;
    color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.header-menu a:hover {
    background-color: #e9ecef;
}

.header-menu a.router-link-exact-active {
    background-color: #007bff;
    color: white;
}
</style>