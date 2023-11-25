import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MtgDetails from './MtgDetails';

describe('<MtgDetails />', () => {
  test('it should mount', () => {
    render(<MtgDetails />);
    
    const mtgDetails = screen.getByTestId('MtgDetails');

    expect(mtgDetails).toBeInTheDocument();
  });
});