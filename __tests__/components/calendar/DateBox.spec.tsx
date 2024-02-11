import React from 'react';
import { render } from '@testing-library/react';
import { DateBox } from '@/components/calendar/DateBox';

describe('DateBox', () => {
  it('displays the date passed through props', () => {
    const { getByText } = render(<DateBox dateNumber={1} />);
    const dateText = getByText('1');
    expect(dateText).toBeInTheDocument();
  });
});
