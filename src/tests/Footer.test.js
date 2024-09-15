//Footer test

import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer'; 

test('renders footer links', () => {
    render(<Footer />);
    const privacyLink = screen.getByText(/Privacy Policy/i);
    expect(privacyLink).toBeInTheDocument();

    const termsLink = screen.getByText(/Terms and Conditions/i);
    expect(termsLink).toBeInTheDocument();
});
