<template>
  <GreetUser :greeting="greeting" />
</template>

<script setup lang="ts">
import useDataFetch from "@/common/hooks/use-data-fetch/UseDataFetch";
import apiClient from "@/data/ApiClient";
import { defaultGreeting } from "./DefaultGreeting";
import GreetUser from "./GreetUser.vue";

const [greeting] = useDataFetch(
  defaultGreeting,
  async () => await apiClient().login.greetUserByPost({ name: "Mike" })
);
</script>
