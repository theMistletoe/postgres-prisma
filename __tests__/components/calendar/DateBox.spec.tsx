import React from 'react';
import { render } from '@testing-library/react';
import { DateBox } from '@/components/calendar/DateBox';

describe('DateBox', () => {
  it('日付が見える', () => {
    const date = new Date("2023-05-21");
    const { getByText } = render(<DateBox date={date} />);
    const dateText = getByText('21');
    expect(dateText).toBeInTheDocument();
  });

  it('曜日が見える', () => {
    const date = new Date("2023-05-21");
    const { getByText } = render(<DateBox date={date} />);
    const dayOfWeek = getByText('日');
    expect(dayOfWeek).toBeInTheDocument();
  });

  it('blankオプションを渡すと、日付が見えない空欄セルが見える', async () => {
    const { queryByText } = render(<DateBox blank />);
    const cell = await queryByText("paragraph");
    expect(cell).not.toBeInTheDocument();
  });
});
