import { translateDayOfWeek } from "@/lib/translateDayOfWeek";

export function DateBox({date}: {date: Date}) {
    return (
        <li data-testid="date-box">
            <p>{date.getDate()}</p>
            <p>{translateDayOfWeek(date)}</p>
        </li>
    );
};