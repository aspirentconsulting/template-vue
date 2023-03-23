<template>
  <p>{{ result }}</p>
  <p>{{ reject }}</p>
</template>

<script setup lang="ts">
import { AxiosHeaders, type AxiosResponse } from "axios";
import useDataFetch from "./UseDataFetch";

export interface UseDataFetchWrapperProperties {
  shouldReject: boolean;
}

const properties = defineProps<UseDataFetchWrapperProperties>();

const promise = new Promise<AxiosResponse<string>>((resolve, reject) => {
  if (properties.shouldReject) {
    reject("call failed");
  } else {
    resolve({
      data: "stringResponse",
      status: 200,
      statusText: "success",
      headers: {},
      config: {
        headers: new AxiosHeaders(),
      },
    });
  }
});

const [result, reject] = useDataFetch("", () => promise);
</script>
