import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders internal components of Header', () => {
    const { findAllByLabelText, getByText } = render(<Header onClick={() => {}} />);

    const Input = findAllByLabelText(/Write about your task/i)
    const Button = getByText(/Add/i)

    expect(Input).toBeTruthy();
    expect(Button).toBeTruthy();
});
