//Live updates test

import { render, screen } from '@testing-library/react';
import LiveUpdates from '../components/LiveUpdates/LiveUpdates';

test('renders Live Race Updates title', () => {
    render(<LiveUpdates />);
    
    // Check if the title is rendered
    const titleElement = screen.getByText(/Live Race Updates/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders the description text', () => {
    render(<LiveUpdates />);
    
    // Check if the description text is rendered
    const descriptionElement = screen.getByText(/Real-time race updates and interactive map for race day./i);
    expect(descriptionElement).toBeInTheDocument();
});

test('renders the iframe for the race map', () => {
    render(<LiveUpdates />);
    
    // Check if the iframe is rendered
    const iframeElement = screen.getByTitle('Live Race Map');
    expect(iframeElement).toBeInTheDocument();
    
    // Check if the iframe has the correct src attribute
    expect(iframeElement).toHaveAttribute('src', 'https://racemap.com/player/100KmDuathlon2018');
    
    // Check iframe width and height
    expect(iframeElement).toHaveAttribute('width', '100%');
    expect(iframeElement).toHaveAttribute('height', '400');
});
