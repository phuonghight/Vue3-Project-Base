<script setup>
import { useAuthStore } from "@/stores/auth.js";

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();

const account = reactive({
  email: "znellvip@gmail.com",
  password: "abcd1234",
});
const loginHandler = async () => {
  try {
    const res = await authStore.login(account);
    console.log(res.data);
    router.push(route.query.redirect || "/");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <form action="" @submit.prevent="loginHandler">
    <div>
      <label for="">Email: </label>
      <input type="email" v-model="account.email" />
    </div>
    <div>
      <label for="">Password: </label>
      <input type="password" v-model="account.password" />
    </div>
    <button>Login</button>
  </form>
</template>

<style scoped lang="scss"></style>

<route lang="yaml">
name: Login
meta:
  layout: blank
</route>
