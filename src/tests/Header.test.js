import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header'; 

test('renders navigation links', () => {
    render(<Header />);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
});
