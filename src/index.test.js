import React from 'react';
import { render } from '@testing-library/react';
import { Widget } from '.';

it('renders without crashing', () => {
    render(<Widget />);
});