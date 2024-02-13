import { ScheduleFormModal } from '@/components/calendar/ScheduleFormModal';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('ScheduleFormModal', () => {
    const user = userEvent.setup();

    it('タイトルが見える', async () => {
        const date = new Date("2023-05-21");
        const { findByText } = render(<ScheduleFormModal date={date} isOpen={true} />); 

        const title = await findByText('2023-05-21の予定');
        expect(title).toBeInTheDocument();
    });
});
