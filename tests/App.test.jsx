import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import ContentIndex from "../src/contentPages/contentIndex";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

describe("button functionality", () => {
  it("click main button", async () => {
    const user = userEvent.setup();

    const testRouter = createMemoryRouter(routes);

    render(<RouterProvider router={testRouter} />);

    const button = screen.getByRole("link", { name: "Inventory" });

    await user.click(button);

    const inventoryHeading = await screen.findByText(
      /This is the store inventory/i,
      { selector: "h1, h2, h3, h4, h5, h6" }
    );

    expect(inventoryHeading).toBeInTheDocument();
  });
});
