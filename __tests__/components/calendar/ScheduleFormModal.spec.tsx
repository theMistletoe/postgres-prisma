import { ScheduleFormModal } from '@/components/calendar/ScheduleFormModal';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

const fetchMock = vi.fn();
fetchMock.mockReturnValue(
    Promise.resolve({
        json: () => Promise.resolve({
            id: 132,
            title: "テスト予定",
            startTime: new Date("2023-05-21T10:00:00.000Z"),
            endTime: new Date("2023-05-21T11:00:00.000Z"),
        }),
    }),
);
vi.stubGlobal('fetch', fetchMock);

describe('ScheduleFormModal', () => {
    const user = userEvent.setup();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('タイトルが見える', async () => {
        const date = new Date("2023-05-21");
        const { findByText } = render(<ScheduleFormModal date={date} isOpen={true} onClose={vi.fn} onScheduleCreate={vi.fn()} />); 

        const title = await findByText('2023-05-21の予定');
        expect(title).toBeInTheDocument();
    });

    it('モーダルを非表示にできる', async () => {
        const date = new Date("2023-05-21");
        const { queryByText } = render(<ScheduleFormModal date={date} isOpen={false} onClose={vi.fn} onScheduleCreate={vi.fn()} />); 

        const title = await queryByText('2023-05-21の予定');
        expect(title).not.toBeInTheDocument();
    });

    it('閉じるボタンを押すと、モーダルが閉じられる。', async () => {
        const date = new Date("2023-05-21");
        const handleClose = vi.fn();
        const { findByText } = render(<ScheduleFormModal date={date} isOpen={true} onClose={handleClose} onScheduleCreate={vi.fn()} />); 

        const closeButton = await findByText('閉じる');
        await user.click(closeButton);

        expect(handleClose).toHaveBeenCalled();
    });

    it('スケジュールを登録することができる。', async () => {
        const date = new Date("2023-05-21");
        const handleClose = vi.fn();
        const handleScheduleCreate = vi.fn();
        const { findByPlaceholderText, findByText } = render(<ScheduleFormModal date={date} isOpen={true} onClose={handleClose} onScheduleCreate={handleScheduleCreate} />); 

        const titleInput = await findByPlaceholderText('予定タイトル');
        const startTimeInput = await findByPlaceholderText('開始時刻');
        const endTimeInput = await findByPlaceholderText('終了時刻');

        await user.type(titleInput, 'テスト予定');
        await user.type(startTimeInput, '10:00');
        await user.type(endTimeInput, '11:00');

        const saveButton = await findByText('保存');
        await user.click(saveButton);

        await waitFor(() => {
            expect(handleClose).toHaveBeenCalled();
            expect(handleScheduleCreate).toHaveBeenCalledWith({
                id: 132,
                title: 'テスト予定',
                startTime: new Date("2023-05-21T10:00:00"),
                endTime: new Date("2023-05-21T11:00:00"),
            });
        });
    });
});
