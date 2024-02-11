import React from 'react';
import { render } from '@testing-library/react';
import { DateBoxList } from '@/components/calendar/DateBoxList';

describe('DateBoxList', () => {
  it('should render the correct number of DateBoxes', () => {
    const date = new Date("2024-02-01");
    const { getByText } = render(<DateBoxList date={date} />);

    const firstDate = getByText('1');
    const lastDate = getByText('29');
    expect(firstDate).toBeInTheDocument();
    expect(lastDate).toBeInTheDocument();
  });

  it('should render blank DateBoxes before the first day of the month', () => {
    const date = new Date("2024-02-01");
    const { getAllByTestId } = render(<DateBoxList date={date} />);

    const dateBoxes = getAllByTestId('date-box');
    expect(dateBoxes).toHaveLength(33);
  });
});
