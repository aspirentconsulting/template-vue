import App from "./App.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders header correctly", () => {
    render(App);

    expect(
      screen.getByRole("heading", { name: /acme sprocket co/i })
    ).toBeInTheDocument();
  });

  it("counter increments correctly", async () => {
    const user = userEvent.setup();

    render(App);

    await user.click(screen.getByRole("button", { name: /increment/i }));

    expect(await screen.findByText(1)).toBeInTheDocument();
  });

  it("counter decrements correctly", async () => {
    const user = userEvent.setup();

    render(App);

    await user.click(screen.getByRole("button", { name: /decrement/i }));

    expect(await screen.findByText(-1)).toBeInTheDocument();
  });
});
