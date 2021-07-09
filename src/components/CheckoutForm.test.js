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
    const first_name = screen.queryByLabelText(/first name:/i)
    const last_name = screen.queryByLabelText(/last name:/i)
    const address = screen.queryByLabelText(/address:/i)
    const city = screen.queryByLabelText(/city:/i)
    const state = screen.queryByLabelText(/state:/i)
    const zip = screen.queryByLabelText(/zip:/i)
    const button = screen.getByRole('button', {name: /checkout/i})

    userEvent.type(first_name, 'sirak')
    userEvent.type(last_name, 'hailemichael')
    userEvent.type(address, '600 william st')
    userEvent.type(city, 'oakland')
    userEvent.type(state, 'california')
    userEvent.type(zip, '94612')
    userEvent.click(button);

    

    expect(first_name).toHaveTextContent('sirak')
    expect(last_name).toHaveTextContent('hailemichael')
    expect(address).toHaveTextContent('600 william st')
    expect(city).toHaveTextContent('oakland')
    expect(zip).toHaveTextContent('94612')
});
