import React from 'react';
import { render } from 'react-testing-library';
import Field from './Field';

it('renders Form Field', () => {
  const { getByText } = render(<Field label="Test label" />);
  expect(getByText('Test label')).toBeInTheDocument();
});
