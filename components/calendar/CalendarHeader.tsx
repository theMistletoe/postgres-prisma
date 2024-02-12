export function CalendarHeader({
    date
}:
{
    date: Date
}) {
    return (
        <div className="h-16 text-xl">
            <p>{date.getFullYear()}年{date.getMonth() + 1}月</p>
        </div>
    );
}