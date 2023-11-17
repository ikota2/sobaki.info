import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import Schedule from './Schedule';
import userEvent from '@testing-library/user-event'; // Adjust the import path as necessary

describe('Schedule Component', () => {
  it('renders null when schedule is undefined', () => {
    render(<Schedule schedule={undefined} currentDate="2023-01-01" status="idle"/>);
    const topTitleFrom = screen.queryByTestId('topTitleFrom');
    expect(topTitleFrom).not.toBeInTheDocument();
  });

  it('renders null when schedule is an empty object', () => {
    render(<Schedule schedule={{}} currentDate="2023-01-01" status="idle"/>);
    const topTitleFrom = screen.queryByTestId('topTitleFrom');
    expect(topTitleFrom).not.toBeInTheDocument();
  });

  it('changes button text when clicked', async() => {
    const mockSchedule = {
      search: {from: 'Дмитровская', to: 'Дедовск'},
      segments: []
    };
    render(<Schedule schedule={mockSchedule} currentDate={'2023-01-01'} status={'loaded'}/>);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton.textContent).toBe("Показать ушедшие собаки");
    userEvent.click(toggleButton);

    await waitFor(() => {
      expect(toggleButton.textContent).toBe('Скрыть ушедшие собаки');
    });
  })
})
