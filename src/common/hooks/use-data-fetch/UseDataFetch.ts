import type { AxiosResponse } from "axios";
import { onMounted, ref, type Ref } from "vue";

export default function useDataFetch<T>(
  defaultResponse: T,
  callback: () => Promise<AxiosResponse<T>>
): [Ref<T>, Ref<string>] {
  const data = ref<T>(defaultResponse) as Ref<T>;
  const errorMessage = ref<string>("");

  onMounted(() => {
    callback()
      .then((response) => (data.value = response.data))
      .catch((error: string) => {
        // TODO: Will update later.
        errorMessage.value = error;
      });
  });

  return [data, errorMessage];
}
