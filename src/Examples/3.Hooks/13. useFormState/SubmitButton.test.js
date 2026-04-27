//  unit test case for SubmitButton.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SubmitButton from "./SubmitButton";

describe("SubmitButton", () => {
    it("should display 'Submitting...' when pending is true", () => {
        render(<SubmitButton pending={true} />);
        expect(screen.getByText("Submitting...")).toBeInTheDocument();
    });
});