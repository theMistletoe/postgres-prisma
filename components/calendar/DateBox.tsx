import { translateDayOfWeek } from "@/lib/translateDayOfWeek";

export function DateBox({date}: {date: Date}) {
    return (
        <li data-testid="date-box" className="bg-white border border-gray-300 h-32">
            <p>{date.getDate()}</p>
            <p>{translateDayOfWeek(date)}</p>
        </li>
    );
};