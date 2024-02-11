import { translateDayOfWeek } from "@/lib/translateDayOfWeek";

export function DateBox({date}: {date: Date}) {
    return (
        <div>
            <p>{date.getDate()}</p>
            <p>{translateDayOfWeek(date)}</p>
        </div>
    );
};