import Calendar from '@/components/calendar/Calendar';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

const fetchGETMock = vi.fn();
fetchGETMock.mockReturnValue(
    Promise.resolve({
        json: () => Promise.resolve([
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
        ]),
    }),
);

describe('Calendar', () => {
    const user = userEvent.setup();

    it('日付セルをクリックすると、予定の登録フォームが見える', async () => {
        const date = new Date("2023-05-21");
        const { getByText, getByPlaceholderText } = render(<Calendar date={date} />); 
        await user.click(getByText('21'));

        const header = getByText('2023-05-21の予定');
        expect(header).toBeInTheDocument();
    });

    it.skip('当月の登録済みの予定が見える', async () => {
        const date = new Date("2023-05-21");
        const { getByText } = render(<Calendar date={date} />); 

        const schedule1 = getByText('テスト予定');
        const schedule2 = getByText('テスト予定2');
        const schedule3 = getByText('テスト予定3');
        expect(schedule1).toBeInTheDocument();
        expect(schedule2).toBeInTheDocument();
        expect(schedule3).toBeInTheDocument();
    });
});
