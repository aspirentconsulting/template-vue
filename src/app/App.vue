<template>
  <h1>Acme Sprocket Co.</h1>
  {{ counter }}
  <button @click="() => ++counter">Increment</button>
  <button @click="() => --counter">Decrement</button>
  <FindAllSprocketsContainer />
</template>

<script setup lang="ts">
import FindAllSprocketsContainer from "@/features/sprockets/find-all/FindAllSprocketsContainer.vue";
import { ref } from "vue";

const counter = ref<number>(0);
</script>
