// ... other imports
import Title from './Title';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

describe('Title Component', () => {
  const mockSetCurrentDate = jest.fn();

  it('changes date when clicked', () => {
    render(<Title currentDate="2023-11-16" setCurrentDate={mockSetCurrentDate} />);

    // Use a regular expression to find the text
    const dateSpan = screen.getByTestId("value");
    expect(dateSpan).toBeInTheDocument();

    userEvent.click(dateSpan);

    // Assuming 'tomorrow' is '2023-11-17'
    expect(mockSetCurrentDate).toHaveBeenCalledWith('2023-11-17');

    // Re-render and check for 'завтра'
    render(<Title currentDate="2023-11-17" setCurrentDate={mockSetCurrentDate} />);
    expect(screen.getByRole('heading', {name: /завтра/i} )).toBeInTheDocument();
  });
});
