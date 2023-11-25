import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MtgEditForm from './MtgEditForm';

describe('<MtgEditForm />', () => {
  test('it should mount', () => {
    render(<MtgEditForm />);
    
    const mtgEditForm = screen.getByTestId('MtgEditForm');

    expect(mtgEditForm).toBeInTheDocument();
  });
});