<template>
  <button class="button" :class="isPrimary ? 'is-primary' : 'is-secondary'">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import "./ButtonElement.css";

export interface ButtonElementProperties {
  /**
   * The button text that will be displayed to the user.
   */
  text: string;

  /**
   * Use the primary or secondary styling.
   */
  isPrimary: boolean;
}

defineProps<ButtonElementProperties>();
</script>
