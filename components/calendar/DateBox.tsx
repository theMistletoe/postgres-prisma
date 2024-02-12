import { translateDayOfWeek } from "@/lib/translateDayOfWeek";

export function DateBox({
    date,
    blank,
    onClick,
}:
{
    date?: Date,
    blank?: boolean
    onClick: (date: Date) => void
}) {

    function handleDateBoxClick(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        if (!date) return;
        onClick(date);
    }

    return (
        <div data-testid="date-box" className="bg-white border border-gray-300 h-32" onClick={handleDateBoxClick}>
            {!blank && date && (
                <div className="flex m-2 justify-between">
                    <p>{date.getDate()}</p>
                    <p className="text-xs">{translateDayOfWeek(date)}</p>
                </div>
            )}
        </div>
    );
};