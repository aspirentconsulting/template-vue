<template>
  <FindAllSprockets :response="response" />
</template>

<script setup lang="ts">
import useDataFetch from "@/common/hooks/use-data-fetch/UseDataFetch";
import apiClient from "@/data/ApiClient";
import FindAllSprockets from "./FindAllSprockets.vue";
import { defaultFindAllSprocketsResponse } from "./DefaultFindAllSprocketsResponse";
import { ref } from "vue";

const page = ref<number>(0);
const pageSize = ref<number>(10);

const [response] = useDataFetch(
  defaultFindAllSprocketsResponse,
  async () =>
    await apiClient().api.findAllSprockets({
      page: page.value,
      pageSize: pageSize.value,
    })
);
</script>
