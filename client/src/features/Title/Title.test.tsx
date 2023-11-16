import Title from './Title';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

describe('Title Component', () => {
  const mockSetCurrentDate = jest.fn();

  it('changes date when clicked', () => {
    render(<Title currentDate="2023-11-16" setCurrentDate={mockSetCurrentDate} />);

    const dateSpan = screen.getByTestId("value");
    expect(dateSpan).toBeInTheDocument();

    userEvent.click(dateSpan);

    expect(mockSetCurrentDate).toHaveBeenCalledWith('2023-11-17');

    render(<Title currentDate="2023-11-17" setCurrentDate={mockSetCurrentDate} />);
    expect(screen.getByRole('heading', {name: /завтра/i} )).toBeInTheDocument();
  });
});
