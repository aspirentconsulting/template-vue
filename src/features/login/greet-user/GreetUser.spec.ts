import { render, screen } from "@testing-library/vue";
import GreetUser from "./GreetUser.vue";

describe("greetUser", () => {
  it("renders properly", () => {
    render(GreetUser, { props: { greeting: { name: "mike" } } });

    expect(screen.getByText(/mike/i)).toBeInTheDocument();
  });
});
