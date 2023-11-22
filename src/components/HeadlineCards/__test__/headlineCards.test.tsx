// HeadlineCards.test.js
import { render } from "@testing-library/react";
import HeadlineCards from "../HeadlineCards";

test("renders HeadlineCards component", () => {
  const { getByText } = render(<HeadlineCards />);

  expect(getByText(/Sun's Out, BOGO's Out/i)).toBeTruthy();
  expect(getByText(/New Restaurants/i)).toBeTruthy();
  expect(getByText(/We Deliver Desserts Too/i)).toBeTruthy();
});
