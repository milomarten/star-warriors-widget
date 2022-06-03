import React from 'react';
import { render } from '@testing-library/react';
import { Widget } from './App';

it('renders without crashing', () => {
    render(<Widget />);
});