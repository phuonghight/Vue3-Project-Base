<script setup></script>

<template>
  <div>
    <h1>This is About page</h1>
    <counter />
  </div>
</template>

<style scoped lang="scss"></style>

<route lang="yaml">
name: About
meta:
  requiresAuth: true
  layout: default
</route>
