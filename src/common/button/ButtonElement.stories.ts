import type { Meta, StoryObj } from "@storybook/vue3";
import ButtonElement from "./ButtonElement.vue";
import ButtonStory from "./ButtonStory.vue";
import { ref } from "vue";

/**
 * The Button Element is a primary UI component.
 */
const meta: Meta<typeof ButtonElement> = {
  component: ButtonElement,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof ButtonElement> = {
  args: {
    text: "My Button",
  },
};

export const Primary: StoryObj<typeof ButtonElement> = {
  args: {
    text: "Primary Button",
    isPrimary: true,
  },
};

export const InRender: StoryObj<typeof ButtonElement> = {
  render: () => ({
    components: { ButtonElement },
    setup() {
      const myRef = ref<string>("hi!");

      return {
        myRef,
      };
    },
    template: `<div><p>P tag inside my render function</p><ButtonElement :text="myRef" /></div>`,
  }),
};

export const Wrapper: StoryObj<typeof ButtonElement> = {
  render: () => ({
    components: { ButtonStory },
    template: `<ButtonStory />`,
  }),
};
