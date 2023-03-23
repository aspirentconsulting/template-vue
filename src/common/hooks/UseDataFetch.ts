import type { AxiosResponse } from "axios";
import { onMounted, ref, type Ref } from "vue";

export default function useDataFetch<T>(
  defaultResponse: T,
  callback: () => Promise<AxiosResponse<T>>
): Ref<T> {
  const data = ref<T>(defaultResponse) as Ref<T>;

  onMounted(() => {
    callback()
      .then((response) => (data.value = response.data))
      .catch((error) => {
        // TODO: Will update later.
        console.log(error);
      });
  });

  return data;
}
