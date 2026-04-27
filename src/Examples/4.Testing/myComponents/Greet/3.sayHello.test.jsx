/**
 * Requirement (TDD):
 * - Renders "SayHello" by default
 * - If name is passed, renders "SayHello <name>"
 */

import { render, screen } from "@testing-library/react";
import SayHello from "./4.SayHello";

describe("SayHello component", () => {
  test("renders default text", () => {
    render(<SayHello />);
    expect(screen.getByText(/sayhello/i)).toBeInTheDocument();
  });

  test("renders with name", () => {
    render(<SayHello name="Sudhir" />);
    expect(screen.getByText(/sayhello sudhir/i)).toBeInTheDocument();
  });
});