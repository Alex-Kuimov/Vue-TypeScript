<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form data
const email = ref('');
const name = ref('');
const password = ref('');

// Form submission
const handleSubmit = () => {
  // In a real application, you would send this data to your backend
  console.log('Registration data:', {
    email: email.value,
    name: name.value,
    password: password.value
  });
  
  // For now, we'll just redirect to login page
  router.push('/login');
};
</script>

<template>
  <div class="registration-page">
    <h1>Регистрация</h1>
    <form @submit.prevent="handleSubmit" class="registration-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          id="email" 
          type="email" 
          v-model="email" 
          required 
          class="form-control"
        />
      </div>
      
      <div class="form-group">
        <label for="name">Имя:</label>
        <input 
          id="name" 
          type="text" 
          v-model="name" 
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
      
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
    </form>
    
    <p class="login-link">
      Уже есть аккаунт? <RouterLink to="/login">Войти</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.registration-page {
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

.registration-form {
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

.login-link {
  text-align: center;
  margin-top: 1.5rem;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>