<script setup></script>

<template>
  <h1>This is Home Page</h1>
  <router-link to="/about">About page</router-link>
  <router-link to="/login">Login</router-link>
</template>

<style scoped lang="scss"></style>

<route lang="yaml">
name: index
meta:
  layout: blank
</route>
