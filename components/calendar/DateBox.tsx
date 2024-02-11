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
        <li data-testid="date-box" className="bg-white border border-gray-300 h-32">
            {!blank && date && (
                <>
                    <p>{date.getDate()}</p>
                    <p>{translateDayOfWeek(date)}</p>
                </>
            )}
        </li>
    );
};