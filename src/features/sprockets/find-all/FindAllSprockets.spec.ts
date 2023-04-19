import { render, screen } from "@testing-library/vue";
import FindAllSprockets, {
  type FindAllSprocketsProperties,
} from "./FindAllSprockets.vue";
import propsWrapper from "@/common/tests/PropsWrapper";

describe("findAllSprockets", () => {
  it("renders properly", () => {
    const properties: FindAllSprocketsProperties = {
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
    };

    render(FindAllSprockets, propsWrapper(properties));

    expect(screen.getByText(/AE72/i)).toBeInTheDocument();
  });
});
