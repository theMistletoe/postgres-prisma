import { ScheduleFormModal } from '@/components/calendar/ScheduleFormModal';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('ScheduleFormModal', () => {
    const user = userEvent.setup();

    it('タイトルが見える', async () => {
        const date = new Date("2023-05-21");
        const { findByText } = render(<ScheduleFormModal date={date} isOpen={true} onClose={vi.fn} />); 

        const title = await findByText('2023-05-21の予定');
        expect(title).toBeInTheDocument();
    });

    it('モーダルを非表示にできる', async () => {
        const date = new Date("2023-05-21");
        const { queryByText } = render(<ScheduleFormModal date={date} isOpen={false} onClose={vi.fn} />); 

        const title = await queryByText('2023-05-21の予定');
        expect(title).not.toBeInTheDocument();
    });

    it('閉じるボタンを押すと、モーダルが閉じられる。', async () => {
        const date = new Date("2023-05-21");
        const handleClose = vi.fn();
        const { findByText } = render(<ScheduleFormModal date={date} isOpen={true} onClose={handleClose} />); 

        const closeButton = await findByText('閉じる');
        await user.click(closeButton);

        expect(handleClose).toHaveBeenCalled();
    });
});
