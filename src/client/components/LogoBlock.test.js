import React from 'react';
import { render } from 'react-testing-library';
import LogoBlock from './LogoBlock';

it('renders LogoBlock', () => {
  const { getByText } = render(<LogoBlock />);
  expect(getByText('Caviste & Horeca')).toBeInTheDocument();
});
