import { render, screen, fireEvent } from '@testing-library/react';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents'; // Adjust the path if necessary

test('renders Upcoming Events title', () => {
    render(<UpcomingEvents />);

    // Check if the title is rendered
    const titleElement = screen.getByText(/Upcoming Events/i);
    expect(titleElement).toBeInTheDocument();
});

test('toggles Local Canberra Races dropdown', () => {
    render(<UpcomingEvents />);

    // Check that the Local Canberra Races heading is rendered
    const localRacesHeading = screen.getByText(/Local Canberra Races/i);
    expect(localRacesHeading).toBeInTheDocument();

    // Initially, the local events should not be visible
    const localEvent = screen.queryByText(/Canberra Criterium Series/i);
    expect(localEvent).not.toBeInTheDocument();

    // Click to open the dropdown
    fireEvent.click(localRacesHeading);

    // Now, the local events should be visible
    const localEventVisible = screen.getByText(/Canberra Criterium Series/i);
    expect(localEventVisible).toBeInTheDocument();

    // Click again to close the dropdown
    fireEvent.click(localRacesHeading);

    // The local events should not be visible anymore
    expect(localEventVisible).not.toBeInTheDocument();
});

test('toggles Other Australian Races dropdown', () => {
    render(<UpcomingEvents />);

    // Check that the Other Australian Races heading is rendered
    const otherRacesHeading = screen.getByText(/Other Australian Races/i);
    expect(otherRacesHeading).toBeInTheDocument();

    // Initially, the other events should not be visible
    const otherEvent = screen.queryByText(/Goulburn to Sydney Classic/i);
    expect(otherEvent).not.toBeInTheDocument();

    // Click to open the dropdown
    fireEvent.click(otherRacesHeading);

    // Now, the other events should be visible
    const otherEventVisible = screen.getByText(/Goulburn to Sydney Classic/i);
    expect(otherEventVisible).toBeInTheDocument();

    // Click again to close the dropdown
    fireEvent.click(otherRacesHeading);

    // The other events should not be visible anymore
    expect(otherEventVisible).not.toBeInTheDocument();
});

