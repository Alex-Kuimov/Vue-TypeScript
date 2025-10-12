<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form data
const login = ref('');
const password = ref('');

// Form submission
const handleSubmit = () => {
  // In a real application, you would validate credentials with your backend
  console.log('Login data:', {
    login: login.value,
    password: password.value
  });
  
  // For now, we'll just redirect to main page
  router.push('/');
};
</script>

<template>
  <div class="login-page">
    <h1>Вход</h1>
    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <label for="login">Логин (имя):</label>
        <input 
          id="login" 
          type="text" 
          v-model="login" 
          required 
          class="form-control"
        />
      </div>
      
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input 
          id="password" 
          type="password" 
          v-model="password" 
          required 
          class="form-control"
        />
      </div>
      
      <button type="submit" class="btn btn-primary">Войти</button>
    </form>
    
    <p class="registration-link">
      Нет аккаунта? <RouterLink to="/register">Зарегистрироваться</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.form-control {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.btn {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.registration-link {
  text-align: center;
  margin-top: 1.5rem;
}

.registration-link a {
  color: #007bff;
  text-decoration: none;
}

.registration-link a:hover {
  text-decoration: underline;
}
</style>