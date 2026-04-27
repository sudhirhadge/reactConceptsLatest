// UseFormState.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UseFormState from ".";

describe("UseFormState", () => {
    it("shows errors on invalid submit", async () => {
        render(<UseFormState />);

        await userEvent.type(screen.getByPlaceholderText("Name"), "Jo");
        await userEvent.type(screen.getByPlaceholderText("Email"), "john");
        await userEvent.click(screen.getByRole("button", { name: /submit/i }));

        expect(await screen.findByText("Name must be at least 3 characters"))
            .toBeInTheDocument();
        expect(await screen.findByText("Enter a valid email"))
            .toBeInTheDocument();
    });

    it("shows success on valid submit", async () => {
        render(<UseFormState />);

        await userEvent.type(screen.getByPlaceholderText("Name"), "John Doe");
        await userEvent.type(screen.getByPlaceholderText("Email"), "john@test.com");
        await userEvent.click(screen.getByRole("button", { name: /submit/i }));

        expect(await screen.findByText("Form submitted successfully"))
            .toBeInTheDocument();
    });

    it("does not show errors on valid submit", async () => {
        render(<UseFormState />);

        await userEvent.type(screen.getByPlaceholderText("Name"), "John Doe");
        await userEvent.type(screen.getByPlaceholderText("Email"), "john@test.com");
        await userEvent.click(screen.getByRole("button", { name: /submit/i }));

        expect(screen.queryByText("Name must be at least 3 characters"))
            .not.toBeInTheDocument();
        expect(screen.queryByText("Enter a valid email"))
            .not.toBeInTheDocument();
    });

    it("does not show success on invalid submit", async () => {
        render(<UseFormState />);

        await userEvent.type(screen.getByPlaceholderText("Name"), "Jo");
        await userEvent.type(screen.getByPlaceholderText("Email"), "john");
        await userEvent.click(screen.getByRole("button", { name: /submit/i }));

        expect(screen.queryByText("Form submitted successfully"))
            .not.toBeInTheDocument();
    });
});