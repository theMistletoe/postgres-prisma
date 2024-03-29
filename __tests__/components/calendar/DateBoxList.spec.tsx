import { render } from '@testing-library/react';
import { DateBoxList } from '@/components/calendar/DateBoxList';

describe('DateBoxList', () => {
  it('should render the correct number of DateBoxes', () => {
    const date = new Date("2024-02-01");
    const { getByText } = render(<DateBoxList date={date} onClick={vi.fn()} />);

    const firstDate = getByText('1');
    const lastDate = getByText('29');
    expect(firstDate).toBeInTheDocument();
    expect(lastDate).toBeInTheDocument();
  });

  it('should render blank DateBoxes before the first day of the month', () => {
    const date = new Date("2024-02-01");
    const { getAllByTestId } = render(<DateBoxList date={date} onClick={vi.fn()} />);

    const dateBoxes = getAllByTestId(/^date-box/);
    expect(dateBoxes).toHaveLength(33);
    expect(dateBoxes[0]).toHaveTextContent('');
    expect(dateBoxes[1]).toHaveTextContent('');
    expect(dateBoxes[2]).toHaveTextContent('');
    expect(dateBoxes[3]).toHaveTextContent('');
    expect(dateBoxes[4]).toHaveTextContent(/^1木$/);
  });

  it('複数の日に予定がある場合、対応する予定の日に予定のタイトルが見える', () => {
    const date = new Date("2024-02-01");
    const { getByTestId } = render(<DateBoxList date={date} schedules={
      [
        {
          id: 132,
          title: "テスト予定",
          startTime: new Date("2024-02-01T10:00:00.000Z"),
          endTime: new Date("2024-02-01T11:00:00.000Z"),
        },
        {
          id: 133,
          title: "テスト予定2",
          startTime: new Date("2024-02-02T12:00:00.000Z"),
          endTime: new Date("2024-02-02T13:00:00.000Z"),
        },
        {
          id: 134,
          title: "テスト予定3",
          startTime: new Date("2024-02-02T14:00:00.000Z"),
          endTime: new Date("2024-02-02T15:00:00.000Z"),
        }
      ]
    } onClick={vi.fn()} />);

    const dateBox1 = getByTestId('date-box_2024-02-01');
    const dateBox2 = getByTestId('date-box_2024-02-02');

    expect(dateBox1).toBeVisible();
    expect(dateBox2).toBeVisible();
    expect(dateBox1).toHaveTextContent(/^1木テスト予定$/);
    expect(dateBox2).toHaveTextContent(/^2金テスト予定2テスト予定3$/);
  });
});
