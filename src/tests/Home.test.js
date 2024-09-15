//Home test

import { render, screen } from '@testing-library/react';
import Home from '../components/Home/Home'; 

test('renders hero section', () => {
    render(<Home />);
    
    // Check if the hero section is rendered
    const heroElement = screen.getByRole('img', { name: /Hero/i });
    expect(heroElement).toBeInTheDocument();
});

test('renders Welcome to VeloNation heading', () => {
    render(<Home />);
    
    // Check if the heading text is rendered
    const headingElement = screen.getByText(/Welcome to VeloNation/i);
    expect(headingElement).toBeInTheDocument();
});
