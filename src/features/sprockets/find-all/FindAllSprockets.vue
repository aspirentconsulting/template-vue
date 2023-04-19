<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Pitch Diameter</th>
        <th>Pitch Outside Diameter</th>
        <th>Pitch Inches</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in response.responses" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.pitchDiameterInches }}</td>
        <td>{{ item.outsideDiameterInches }}</td>
        <td>{{ item.pitchInches }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { SprocketResponsePageResponse } from "@/data/Api";

export interface FindAllSprocketsProperties {
  response: SprocketResponsePageResponse;
}

defineProps<FindAllSprocketsProperties>();
</script>
