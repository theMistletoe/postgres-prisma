import { CalendarHeader } from '@/components/calendar/CalendarHeader';
import { render } from '@testing-library/react';

describe('CalendarHeader', () => {
  it('月名の見出しが見える', () => {
    const date = new Date("2024-02-01");
    const { getByText } = render(<CalendarHeader date={date} />);

    const displayMonth = getByText('2024年2月');
    expect(displayMonth).toBeInTheDocument();
  });
});
