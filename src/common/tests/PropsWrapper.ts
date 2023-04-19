import type { RenderOptions } from "@testing-library/vue";

export default function propsWrapper<T extends object>(data: T): RenderOptions {
  return { props: data };
}
