<template>
  <div>{{ greeting.name }}</div>
</template>

<script setup lang="ts">
import type { Greeting } from "@/data/Api";

export interface GreetUserProperties {
  greeting: Greeting;
}

defineProps<GreetUserProperties>();
</script>
