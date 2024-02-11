import React from 'react';
import { render } from '@testing-library/react';
import { DateBoxList } from '@/components/calendar/DateBoxList';

describe('DateBoxList', () => {
  it('should render the correct number of DateBoxes', () => {
    const date = new Date("2024-02-01");
    const { getAllByTestId, getByText } = render(<DateBoxList date={date} />);

    const dateBoxes = getAllByTestId('date-box');
    expect(dateBoxes).toHaveLength(29);

    const firstDate = getByText('1');
    const lastDate = getByText('29');
    expect(firstDate).toBeInTheDocument();
    expect(lastDate).toBeInTheDocument();
  });
});
