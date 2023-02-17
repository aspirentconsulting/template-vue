import App from "./App.vue";
import { render, screen } from "@testing-library/vue";

describe("App", () => {
  it("renders header correctly", () => {
    render(App);

    expect(screen.getByText(/acme sprocket co/i)).toBeInTheDocument();
  });
});
