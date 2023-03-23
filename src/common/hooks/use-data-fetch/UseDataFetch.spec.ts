import { render, screen } from "@testing-library/vue";
import UseDataFetchWrapper from "./UseDataFetchWrapper.vue";

describe("useDataFetch", () => {
  it("returns response", async () => {
    render(UseDataFetchWrapper, { props: { shouldReject: false } });

    expect(await screen.findByText(/stringResponse/i)).toBeInTheDocument();
  });

  it("rejects properly", async () => {
    render(UseDataFetchWrapper, { props: { shouldReject: true } });

    expect(await screen.findByText(/call failed/)).toBeInTheDocument();
  });
});
