import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);

  // Test to check Page Home was renders
  const titleInDocument = getByText(/#todopp/i);

  // Test to check Tabs Component was renders
  const textTabComponent = getByText(/All/i);

  // Test to check Header Component was renders
  const textHeaderComponent = getByText(/Add/i);

  expect(titleInDocument).toBeInTheDocument();
  expect(textTabComponent).toBeInTheDocument();
  expect(textHeaderComponent).toBeInTheDocument();
});
