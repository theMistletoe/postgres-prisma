export function translateDayOfWeek(date: Date): string {
    return ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
}