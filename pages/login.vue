<script setup lang="ts">
const auth = useCookie('pokemon-auth');
const router = useRouter();
const toast = useToast();

function authenticate() {
  auth.value = 'random-trainer-id';
  router.push('/');
  toast.add({
    title: 'Cookie IN',
    color: 'success',
  });
}

function logout() {
  auth.value = '';
  toast.add({
    title: 'Cookie OUT',
    color: 'neutral',
  });
}
</script>

<template>
  <h1>Login</h1>
  <UButton @click="authenticate">Login</UButton>
  <UButton @click="logout" color="secondary">Logout</UButton>
</template>
