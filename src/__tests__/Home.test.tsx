import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Introduction from '../pages/IntroductionPage';

test('renders page correctly correctly', () => {
    render(<Introduction language="en" />);

    const nameInput = screen.getByTestId('projects-section');

    expect(nameInput).toBe;
});