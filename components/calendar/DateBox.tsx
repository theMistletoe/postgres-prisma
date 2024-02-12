import { translateDayOfWeek } from "@/lib/translateDayOfWeek";

export function DateBox({
    date,
    blank,
}:
{
    date?: Date,
    blank?: boolean
}) {
    return (
        <div data-testid="date-box" className="bg-white border border-gray-300 h-32">
            {!blank && date && (
                <div className="flex m-2 justify-between">
                    <p>{date.getDate()}</p>
                    <p className="text-xs">{translateDayOfWeek(date)}</p>
                </div>
            )}
        </div>
    );
};