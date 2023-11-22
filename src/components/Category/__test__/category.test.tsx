import { render } from "@testing-library/react";
import Category from "../category";
import { categories } from "../../../data/data.ts";

describe("Category component", () => {
  it("renders correctly", () => {
    const { getByText, getAllByAltText } = render(<Category />);

    // Check if the component renders the title
    expect(getByText("Top Rated Menu Items")).toBeTruthy();

    // Check if all categories are rendered
    categories.forEach((category) => {
      expect(getByText(category.name)).toBeTruthy();
    });

    // Check if all category images are rendered
    categories.forEach((category) => {
      expect(getAllByAltText(category.name)).toHaveLength(1);
    });
  });

  it("renders correct number of categories", () => {
    const { container } = render(<Category />);

    // Check if the correct number of category items are rendered
    const categoryItems = container.querySelectorAll(".category-item");
    expect(categoryItems.length).toBe(categories.length);
  });
});
