import { render } from '@testing-library/react';
import { DateBox } from '@/components/calendar/DateBox';
import userEvent from '@testing-library/user-event';

describe('DateBox', () => {
  const user = userEvent.setup();

  it('日付が見える', () => {
    const date = new Date("2023-05-21");
    const { getByText } = render(<DateBox date={date} onClick={vi.fn()} />);
    const dateText = getByText('21');
    expect(dateText).toBeInTheDocument();
  });

  it('曜日が見える', () => {
    const date = new Date("2023-05-21");
    const { getByText } = render(<DateBox date={date} onClick={vi.fn()} />);
    const dayOfWeek = getByText('日');
    expect(dayOfWeek).toBeInTheDocument();
  });

  it('blankオプションを渡すと、日付が見えない空欄セルが見える', async () => {
    const { queryByText } = render(<DateBox blank onClick={vi.fn()} />);
    const cell = await queryByText("paragraph");
    expect(cell).not.toBeInTheDocument();
  });

  it("セルをクリックすると、渡された関数を実行する", async () => {
    const date = new Date("2023-05-21");
    const mockFn = vi.fn();
    const { getByTestId } = render(<DateBox date={date} onClick={mockFn} />);
    const cell = getByTestId("date-box");
    await user.click(cell);

    expect(mockFn).toHaveBeenCalled();
  });

  it('当日の予定が見える', async () => {
    const date = new Date("2023-05-21");
    const { getByText } = render(<DateBox date={date} schedules={[
      {
        id: 132,
        title: "テスト予定",
        startTime: new Date("2023-05-21T10:00:00.000Z"),
        endTime: new Date("2023-05-21T11:00:00.000Z"),
      },
      {
        id: 133,
        title: "テスト予定2",
        startTime: new Date("2023-05-21T12:00:00.000Z"),
        endTime: new Date("2023-05-21T13:00:00.000Z"),
      },
      {
        id: 134,
        title: "テスト予定3",
        startTime: new Date("2023-05-21T14:00:00.000Z"),
        endTime: new Date("2023-05-21T15:00:00.000Z"),
      }
    ]} onClick={vi.fn()} />);
    const schedule1 = getByText('テスト予定');
    const schedule2 = getByText('テスト予定2');
    const schedule3 = getByText('テスト予定3');
    expect(schedule1).toBeInTheDocument();
    expect(schedule2).toBeInTheDocument();
    expect(schedule3).toBeInTheDocument();
  });
});
