import { useSchedule } from "@/hooks/useSchedule";
import { renderHook, waitFor } from "@testing-library/react";

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

describe('useSchedule', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('スケジュールを追加できる', async () => {
        const { result } = renderHook(() => useSchedule());
        const { addSchedule } = result.current;

        addSchedule({
            title: 'テスト予定',
            startTime: new Date("2023-05-21T10:00:00.000Z"),
            endTime: new Date("2023-05-21T11:00:00.000Z"),
        });

        await waitFor(() => expect(result.current.schedules).toHaveLength(1));
    });
});