import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MtgForm from './MtgForm';

describe('<MtgForm />', () => {
  test('it should mount', () => {
    render(<MtgForm />);
    
    const mtgForm = screen.getByTestId('MtgForm');

    expect(mtgForm).toBeInTheDocument();
  });
});