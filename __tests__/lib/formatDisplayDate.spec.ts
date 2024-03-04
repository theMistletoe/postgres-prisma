import { formatDisplayDate } from "@/lib/formatDisplayDate";

describe('formatDisplayDate', () => {
    it('Date型の日付をYYYY/MM/DD形式に変換できる', () => {
        const date = new Date("2023-05-21T10:00:00.000Z");
        expect(formatDisplayDate(date)).toBe('2023/05/21');
    });
});