import { useSchedule } from "@/hooks/useSchedule";
import { renderHook, waitFor } from "@testing-library/react";

const fetchPOSTMock = vi.fn();
fetchPOSTMock.mockReturnValue(
    Promise.resolve({
        json: () => Promise.resolve({
            id: 132,
            title: "テスト予定",
            startTime: new Date("2023-05-21T10:00:00.000Z"),
            endTime: new Date("2023-05-21T11:00:00.000Z"),
        }),
    }),
);

const fetchGETMock = vi.fn();
fetchGETMock.mockReturnValue(
    Promise.resolve({
        json: () => Promise.resolve([
            {
                id: 132,
                title: "テスト予定",
                startTime: "2023-05-21T10:00:00.000Z",
                endTime: "2023-05-21T11:00:00.000Z",
            },
            {
                id: 133,
                title: "テスト予定2",
                startTime: "2023-05-21T12:00:00.000Z",
                endTime: "2023-05-21T13:00:00.000Z",
            },
            {
                id: 134,
                title: "テスト予定3",
                startTime: "2023-05-21T14:00:00.000Z",
                endTime: "2023-05-21T15:00:00.000Z",
            }
        ]),
    }),
);

describe('useSchedule', () => {
    
    afterEach(() => {
        vi.clearAllMocks();
    });
    
    it('スケジュールを追加できる', async () => {
        vi.stubGlobal('fetch', fetchPOSTMock);
        const { result } = renderHook(() => useSchedule());
        const { addSchedule } = result.current;

        addSchedule({
            title: 'テスト予定',
            startTime: new Date("2023-05-21T10:00:00.000Z"),
            endTime: new Date("2023-05-21T11:00:00.000Z"),
        });

        await waitFor(() => expect(result.current.schedules).toHaveLength(1));
    });

    it('スケジュール一覧を取得できる', async () => {
        vi.stubGlobal('fetch', fetchGETMock);
        const { result } = renderHook(() => useSchedule());
        const { getSchedules } = result.current;

        await getSchedules();

        await waitFor(() => expect(result.current.schedules).toHaveLength(3));
        expect(result.current.schedules[0].title).toBe('テスト予定');
        expect(result.current.schedules[1].title).toBe('テスト予定2');
        expect(result.current.schedules[2].title).toBe('テスト予定3');
        expect(result.current.schedules[0].startTime.toISOString()).toBe("2023-05-21T10:00:00.000Z");
        expect(result.current.schedules[1].startTime.toISOString()).toBe("2023-05-21T12:00:00.000Z");
        expect(result.current.schedules[2].startTime.toISOString()).toBe("2023-05-21T14:00:00.000Z");
    });
});