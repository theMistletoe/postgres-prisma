import { translateDayOfWeek } from "@/lib/translateDayOfWeek";
import { Schedule } from "@prisma/client";

export function DateBox({
    date,
    blank,
    schedules,
    onClick,
}:
{
    date?: Date,
    blank?: boolean,
    schedules?: Schedule[],
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
            {schedules && schedules.map((schedule) => {
                return (
                    <div key={schedule.id} className="bg-blue-300 p-1 m-1">
                        <p>{schedule.title}</p>
                    </div>
                );
            })}
        </div>
    );
};