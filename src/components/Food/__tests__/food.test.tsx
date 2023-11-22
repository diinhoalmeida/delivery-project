import { render, fireEvent } from "@testing-library/react";
import Food from "../food";

test("renders Food component", () => {
  const { getByText } = render(<Food />);

  expect(getByText("Top Rated Menu Items")).toBeTruthy();
});

test("filters foods when FilterType and FilterPrice are interacted with", () => {
  const { getByText } = render(<Food />);

  // Simulate a button click in FilterType
  fireEvent.click(getByText("Burgers"));

  // Assert that only foods of Category 1 are displayed
  expect(getByText("Burgers")).toBeTruthy();

  // Simulate a button click in FilterPrice
  fireEvent.click(getByText("$ $"));

  expect(getByText("Mushroom Burger")).toBeTruthy();
});
