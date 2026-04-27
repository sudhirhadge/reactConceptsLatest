/**
 * ForwardRef + useImperativeHandle Tests
 *
 * 🔹 Learning Goals:
 * - How to test components using forwardRef
 * - How to test useImperativeHandle behavior via UI (not ref directly)
 * - Prefer userEvent over fireEvent (real user simulation)
 * - Use accessible queries (getByRole, getByPlaceholderText)
 * - Mock side effects like console.log safely using vi
 */
import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ForwardRefDemo from "./index";
import { FancyInput, ControlledInput } from "./index";

describe("ForwardRef Demo", () => {
  let consoleSpy;

  beforeEach(() => {
    /**
     * 🔹 Learning:
     * Mock side effects (like console.log) to:
     * - avoid noisy test output
     * - assert behavior safely
     */
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    /**
     * 🔹 Learning:
     * Always clean mocks → prevents cross-test pollution
     */
    vi.restoreAllMocks();
  });

  test("renders ForwardRef demo components", () => {
    render(<ForwardRefDemo />);

    /**
     * 🔹 Learning:
     * Use case-insensitive regex → avoids brittle tests
     */
    expect(screen.getByText(/forwardref demo/i)).toBeInTheDocument();
    expect(screen.getByText(/basic forwardref example/i)).toBeInTheDocument();
    expect(screen.getByText(/useimperativehandle example/i)).toBeInTheDocument();
  });

  test("FancyInput receives focus when button is clicked", async () => {
    const user = userEvent.setup();
    render(<ForwardRefDemo />);

    const input = screen.getByPlaceholderText(/click focus button/i);
    const button = screen.getByRole("button", { name: /focus fancy input/i });

    expect(input).not.toHaveFocus();

    /**
     * 🔹 Learning:
     * userEvent simulates real browser behavior (async)
     */
    await user.click(button);

    /**
     * 🔹 Learning:
     * Testing forwardRef behavior via UI (focus) ✅
     * NOT by accessing ref directly ❌
     */
    expect(input).toHaveFocus();
  });

  test("ControlledInput focus works via ref", async () => {
    const user = userEvent.setup();
    render(<ForwardRefDemo />);

    const input = screen.getByPlaceholderText(/type something/i);
    const button = screen.getByRole("button", { name: /^focus$/i });

    expect(input).not.toHaveFocus();

    await user.click(button);

    /**
     * 🔹 Learning:
     * useImperativeHandle → exposed methods used internally
     * We verify via UI outcome (focus), not internal implementation
     */
    expect(input).toHaveFocus();
  });

  test("ControlledInput clear method works", async () => {
    const user = userEvent.setup();
    render(<ForwardRefDemo />);

    const input = screen.getByPlaceholderText(/type something/i);
    const clearBtn = screen.getByRole("button", { name: /clear/i });

    await user.type(input, "test value");
    expect(input).toHaveValue("test value");

    await user.click(clearBtn);

    /**
     * 🔹 Learning:
     * Always assert state before and after action
     */
    expect(input).toHaveValue("");
  });

  test("ControlledInput getValue method works", async () => {
    const user = userEvent.setup();
    render(<ForwardRefDemo />);

    const input = screen.getByPlaceholderText(/type something/i);
    const logBtn = screen.getByRole("button", { name: /log value/i });

    await user.type(input, "test value");
    await user.click(logBtn);

    /**
     * 🔹 Learning:
     * Side effects (console.log) should be mocked + asserted
     */
    expect(consoleSpy).toHaveBeenCalledWith(
      "Controlled input value:",
      "test value"
    );
  });

  test("ControlledInput setValue method works", async () => {
    const user = userEvent.setup();
    render(<ForwardRefDemo />);

    const input = screen.getByPlaceholderText(/type something/i);
    const setBtn = screen.getByRole("button", { name: /set value/i });

    await user.click(setBtn);

    /**
     * 🔹 Learning:
     * Testing imperative updates via UI-triggered actions
     */
    expect(input).toHaveValue("Hello from parent!");
  });

  /*test("FancyInput renders with styles", () => {
    const ref = React.createRef();
    render(<FancyInput ref={ref} placeholder="test" />);

    const input = screen.getByPlaceholderText(/test/i);

    expect(input).toHaveStyle("padding: 8px");
    expect(input).toHaveStyle("border: 2px solid rgb(0, 123, 255)");

    // fallback for tricky styles
    const styles = window.getComputedStyle(input);
    expect(styles.borderRadius).toBe("4px");
  });

  test("ControlledInput renders with styles", () => {
    render(<ControlledInput placeholder="test" />);

    const input = screen.getByPlaceholderText(/test/i);

    expect(input).toHaveStyle({
      padding: "8px",
      border: "2px solid #28a745",
      borderRadius: "4px",
      fontSize: "16px",
    });
  }); */
});