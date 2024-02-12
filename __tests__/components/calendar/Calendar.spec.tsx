import Calendar from '@/components/calendar/Calendar';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('Calendar', () => {
    const user = userEvent.setup();

    it.skip('日付セルをクリックすると、予定の登録フォームが見える', async () => {
        const date = new Date("2023-05-21");
        const { getByText, getByPlaceholderText } = render(<Calendar date={date} />); 
        await user.click(getByText('21'));

        const formTitlePlaceholder = getByPlaceholderText('タイトル');
        expect(formTitlePlaceholder).toBeInTheDocument();
    });
});
