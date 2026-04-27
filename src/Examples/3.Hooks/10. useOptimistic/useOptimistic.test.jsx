import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import React from "react";
import Demo_useOptimistic from "./index";

describe("Demo_useOptimistic – useOptimistic", () => {
  beforeEach(() => {
    vi.spyOn(console, "warn").mockImplementation(() => { });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders the demo title and list", () => {
    render(<Demo_useOptimistic />);

    expect(
      screen.getByText(/react concept: useoptimistic/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/optimistic todo list/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/learn react hooks/i)
    ).toBeInTheDocument();
  });

  test("shows optimistic todo immediately when adding", async () => {
    const user = userEvent.setup();
    render(<Demo_useOptimistic />);

    const input = screen.getByPlaceholderText(/add a todo/i);
    const addButton = screen.getByRole("button", { name: /add todo/i });

    await user.type(input, "Buy groceries");
    await user.click(addButton);

    // optimistic UI
    expect(screen.getByText(/buy groceries/i)).toBeInTheDocument();
    expect(screen.getByText(/\(adding\.\.\.\)/i)).toBeInTheDocument();

    // wait for server simulation to finish
    await waitFor(() => {
      expect(
        screen.queryByText(/\(adding\.\.\.\)/i)
      ).not.toBeInTheDocument();
    });
  });

  test("removes todo from list when clicking Remove", async () => {
    const user = userEvent.setup();
    render(<Demo_useOptimistic />);

    const removeButton = screen.getByRole("button", { name: /remove/i });

    await user.click(removeButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/learn react hooks/i)
      ).not.toBeInTheDocument();
    });
  });

  test("disables Add button when input is empty", () => {
    render(<Demo_useOptimistic />);

    const addButton = screen.getByRole("button", { name: /add todo/i });

    expect(addButton).toBeDisabled();
  });

  test("enables Add button when input has text", async () => {
    const user = userEvent.setup();
    render(<Demo_useOptimistic />);

    const input = screen.getByPlaceholderText(/add a todo/i);
    const addButton = screen.getByRole("button", { name: /add todo/i });

    await user.type(input, "Valid todo");

    expect(addButton).not.toBeDisabled();
  });
});