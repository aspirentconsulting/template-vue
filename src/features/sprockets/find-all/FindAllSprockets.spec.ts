import { render, screen } from "@testing-library/vue";
import FindAllSprockets from "./FindAllSprockets.vue";

describe("findAllSprockets", () => {
  it("renders properly", () => {
    render(FindAllSprockets, {
      props: {
        response: {
          responses: [
            {
              name: "AE72",
              id: "1",
              pitchDiameterInches: 5,
              pitchInches: 10,
              outsideDiameterInches: 10,
              deleted: false,
            },
          ],
          totalCount: 1,
        },
      },
    });

    expect(screen.getByText(/AE72/i)).toBeInTheDocument();
  });
});
