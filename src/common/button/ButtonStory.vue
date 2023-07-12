<template>
  <div>
    <p>In a wrapper component!</p>
  </div>
  <ButtonElement text="My Wrapper Template" :is-primary="true" />
</template>

<script setup lang="ts">
import ButtonElement from "./ButtonElement.vue";
</script>
