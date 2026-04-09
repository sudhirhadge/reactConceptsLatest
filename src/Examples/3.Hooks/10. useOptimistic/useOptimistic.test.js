/**
 * Tests for useOptimistic – Optimistic Todo List
 *
 * - Tests the optimistic UI during add/remove.
 * - Uses @testing-library/react + jest‑dom.
 * - Covers happy path and pending‑state visibility.
 */

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Demo_useOptimistic } from "./index";

// Fix console.warn noise from React 18+ in tests
beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  console.warn.mockRestore();
});

/**
 * Waits for an async update to settle (e.g., timer‑based backend).
 */
const waitForAsync = async (ms = 1000) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, ms));
  });
};

describe("Demo_useOptimistic – useOptimistic", () => {
  test("renders the demo title and list", () => {
    render(<Demo_useOptimistic />);

    expect(screen.getByText("React Concept: useOptimistic")).toBeInTheDocument();
    expect(screen.getByText("useOptimistic – Optimistic Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React hooks")).toBeInTheDocument();
  });

  test("shows optimistic todo immediately when adding", async () => {
    const user = userEvent.setup({ delay: null });
    render(<Demo_useOptimistic />);

    const input = screen.getByPlaceholderText("Add a todo...");
    const addButton = screen.getByRole("button", { name: "Add Todo" });

    await user.type(input, "Buy groceries");
    await user.click(addButton);

    // Immediately after click, optimistic UI should show
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("(Adding...)")).toBeInTheDocument();

    // After ~1s, loading state should disappear (server response)
    await waitForAsync();
    expect(screen.queryByText("(Adding...)")).not.toBeInTheDocument();
  });

  test("removes todo from list when clicking Remove", async () => {
    const user = userEvent.setup({ delay: null });
    render(<Demo_useOptimistic />);

    const removeButton = screen.getByRole("button", { name: "Remove" });

    await user.click(removeButton);

    expect(screen.queryByText("Learn React hooks")).not.toBeInTheDocument();
  });

  test("disables Add button when input is empty", () => {
    render(<Demo_useOptimistic />);

    const addButton = screen.getByRole("button", { name: "Add Todo" });

    expect(addButton).toBeDisabled();
  });

  test("enables Add button when input has text", async () => {
    const user = userEvent.setup({ delay: null });
    render(<Demo_useOptimistic />);

    const input = screen.getByPlaceholderText("Add a todo...");
    const addButton = screen.getByRole("button", { name: "Add Todo" });

    await user.type(input, "Valid todo");

    expect(addButton).not.toBeDisabled();
  });
});