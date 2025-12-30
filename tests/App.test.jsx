import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import Card from "../src/contentPages/inventoryCard";

describe.skip("button functionality", () => {
  it("click inventory button", async () => {
    const user = userEvent.setup();

    const testRouter = createMemoryRouter(routes);

    render(<RouterProvider router={testRouter} />);

    const button = screen.getByRole("link", { name: "Inventory" });

    await user.click(button);

    const inventoryHeading = await screen.findByText(/Solid Gold/i);

    expect(inventoryHeading).toBeInTheDocument();
  });

  it("> button test", async () => {
    const user = userEvent.setup();
    const testRouter = createMemoryRouter(routes);
    render(<RouterProvider router={testRouter} />);

    const button = screen.getByRole("link", { name: "Inventory" });
    await user.click(button);

    const quantUpButton = await screen.findAllByRole("button", { name: />/i });
    expect(quantUpButton[0]).toBeInTheDocument();
  });
});

describe.skip("render inventory card", () => {
  const mockProduct = { id: 1, title: "Solid Gold", image: "asdf" };
  const mockCart = [];

  const mockSetCart = vi.fn();
  const mockUpdateCartAdd = vi.fn();
  const mockUpdateCartRemove = vi.fn();

  it("render inventory card", async () => {
    const user = userEvent.setup();

    render(
      <Card
        key={mockProduct.id}
        itemId={mockProduct.id}
        itemImg={mockProduct.image}
        itemName={mockProduct.title}
        cart={mockCart}
        setCart={mockSetCart}
        addToCart={mockUpdateCartAdd}
        removeFromCart={mockUpdateCartRemove}
      />
    );
    expect(screen.getByText(/Solid gold/i)).toBeInTheDocument();
    const quantUpButton = screen.getByRole("button", { name: ">" });
    await user.click(quantUpButton);
    await user.click(quantUpButton);
    expect(screen.getByText(/Quantity: 2/i)).toBeInTheDocument();
  });
});

describe("check cart page functionality", () => {
  it("check if 3 items are added to cart", async () => {
    const user = userEvent.setup();

    const testRouter = createMemoryRouter(routes);

    render(<RouterProvider router={testRouter} />);

    const inventoryButton = screen.getByRole("link", { name: "Inventory" });

    await user.click(inventoryButton);

    const quantUpButton = await screen.findAllByRole("button", { name: />/i });
    const addToCartButton = await screen.findAllByRole("button", {
      name: /Add to cart/i,
    });
    await user.click(quantUpButton[3]);
    await user.click(quantUpButton[3]);
    await user.click(quantUpButton[3]);
    await user.click(addToCartButton[3]);
    await user.click(quantUpButton[5]);
    await user.click(addToCartButton[5]);
    await user.click(quantUpButton[8]);
    await user.click(quantUpButton[8]);
    await user.click(addToCartButton[8]);

    const cartButton = screen.getByRole("link", { name: "Cart" });
    await user.click(cartButton);

    const quantRender = await screen.findAllByText(/Quantity/i);
    expect(quantRender.length).toEqual(3);
  });
  it.skip("check if 5 items are added to cart", async () => {});
  it.skip("check if 3 added and one remove results in 2 added", async () => {});
});
