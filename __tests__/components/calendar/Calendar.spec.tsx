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
                startTime: new Date("2023-05-22T12:00:00.000Z"),
                endTime: new Date("2023-05-22T13:00:00.000Z"),
            },
            {
                id: 134,
                title: "テスト予定3",
                startTime: new Date("2023-05-23T14:00:00.000Z"),
                endTime: new Date("2023-05-23T15:00:00.000Z"),
            }
        ]),
    }),
);
vi.stubGlobal('fetch', fetchGETMock);

describe('Calendar', () => {
    const user = userEvent.setup();

    it('日付セルをクリックすると、予定の登録フォームが見える', async () => {
        const date = new Date("2023-05-21");
        const { getByText, getByPlaceholderText } = render(<Calendar date={date} />); 
        await user.click(getByText('21'));

        const header = getByText('2023/05/21の予定');
        expect(header).toBeInTheDocument();
    });

    it('当月の登録済みの予定が見える', async () => {
        const date = new Date("2023-05-21");
        const { findByTestId } = render(<Calendar date={date} />); 

        const dateBox1 = await findByTestId('date-box_2023-05-21');
        const dateBox2 = await findByTestId('date-box_2023-05-22');
        const dateBox3 = await findByTestId('date-box_2023-05-23');

        expect(dateBox1).toBeVisible();
        expect(dateBox2).toBeVisible();
        expect(dateBox3).toBeVisible();
        expect(dateBox1).toHaveTextContent(/^21日テスト予定$/);
        expect(dateBox2).toHaveTextContent(/^22月テスト予定2$/);
        expect(dateBox3).toHaveTextContent(/^23火テスト予定3$/);
    });
});
