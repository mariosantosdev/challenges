import React from 'react';
import { render } from '@testing-library/react';
import Slider from '../components/Slider';

test('renders internal components of Slider', () => {
    const { getByText } = render(<Slider active={'all'} onChange={() => {}} />);

    const AllTab = getByText(/All/i)
    const ActiveTab = getByText(/Active/i)
    const CompletedTab = getByText(/Completed/i)

    expect(AllTab).toBeTruthy();
    expect(ActiveTab).toBeTruthy();
    expect(CompletedTab).toBeTruthy();
});
