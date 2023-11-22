import { render, screen } from "@testing-library/react";
import Hero from "../hero";

describe("Hero component", () => {
  it('renders an Image with alt text "hamburguer image banner"', () => {
    render(<Hero />);
    const imageElement = screen.getByAltText("hamburguer image banner");
    expect(imageElement).toBeTruthy();
  });

  it("matches the snapshot", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});

export default {};
