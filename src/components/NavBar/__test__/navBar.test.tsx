import { render, fireEvent } from "@testing-library/react";
import NavBar from "../navBar";

test("renders all child components", async () => {
  const { getByTestId } = render(<NavBar />);

  expect(getByTestId("navbar-left")).toBeTruthy();
  expect(getByTestId("search-input")).toBeTruthy();
  expect(getByTestId("cart-button")).toBeTruthy();
});

test("toggles NavBarOverlay when nav state changes", () => {
  const { getByTestId, queryByTestId } = render(<NavBar />);

  // Initially, NavBarOverlay should not be present
  const overlay = queryByTestId("navbar-overlay");
  expect(overlay).toBeNull();

  // Trigger an action that sets nav to true
  fireEvent.click(getByTestId("navbar-left"));

  // Check if NavBarOverlay is now present
  expect(getByTestId("navbar-overlay")).toBeTruthy();

  // Trigger an action that sets nav to false
  fireEvent.click(getByTestId("navbar-left"));

  // Check if NavBarOverlay is no longer present
  expect(queryByTestId("navbar-overlay")).toBeNull();
});
