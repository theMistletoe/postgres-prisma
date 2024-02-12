import { translateDayOfWeek } from "@/lib/translateDayOfWeek";

export function DateBox({
    date,
    blank,
    onClick,
}:
{
    date?: Date,
    blank?: boolean
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}) {
    return (
        <div data-testid="date-box" className="bg-white border border-gray-300 h-32" onClick={onClick}>
            {!blank && date && (
                <div className="flex m-2 justify-between">
                    <p>{date.getDate()}</p>
                    <p className="text-xs">{translateDayOfWeek(date)}</p>
                </div>
            )}
        </div>
    );
};