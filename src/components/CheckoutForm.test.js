import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const title = screen.queryByText(/checkout form/i)
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const first_name = screen.queryByLabelText(/first name/i)
    const last_name = screen.queryByLabelText(/last name/i)
    const button = screen.getByRole('button', {name: /checkout/i})

    userEvent.type(first_name, 'sirak')
    userEvent.type(last_name, 'hailemichael')
    userEvent.click(button);

    const success = await screen.findByTestId(/successMessage/i)
    const successName = await screen.findByTestId(/successMessage/i)

    expect(success).toBeInTheDocument();
    expect(successName).toBeInTheDocument();
    expect(first_name).toHaveTextContent('sirak')
});
