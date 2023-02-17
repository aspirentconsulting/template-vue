<template>
  <h1>Acme Sprocket Co.</h1>
  {{ counter }}
</template>

<script setup lang="ts">
import { ref } from "vue";

const counter = ref<number>(0);
</script>
