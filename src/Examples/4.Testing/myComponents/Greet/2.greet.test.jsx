import { render, screen } from "@testing-library/react";
import Greet from "./1.Greet";

// render() → creates a virtual DOM for testing
// screen → provides queries to access elements from the DOM
// expect() → assertion API from Vitest
// toBeInTheDocument() → matcher from @testing-library/jest-dom

test("renders exact 'Hello'", () => {
  render(<Greet />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("renders 'hello' (case-insensitive)", () => {
  render(<Greet />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});