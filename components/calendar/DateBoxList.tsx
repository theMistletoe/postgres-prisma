import { Schedule } from "@prisma/client";
import { DateBox } from "./DateBox";
import { formatDisplayDate } from "@/lib/formatDisplayDate";

type DateBoxListProps = {
    date: Date,
    schedules?: Schedule[],
    onClick: (event: Date) => void
}

export function DateBoxList({ date, schedules, onClick }: DateBoxListProps) {
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dateList = Array(firstDate.getDay()).fill(undefined)
        .concat(
            Array.from({ length: lastDate.getDate() - firstDate.getDate() + 1 }, (_, i) => new Date(date.getFullYear(), date.getMonth(), i + firstDate.getDate()))
        );

    function getSchedulesByDay(date: Date): Schedule[] | undefined {
        return schedules?.filter((schedule) => isSameDay(date, schedule.startTime));
    };

    function isSameDay(date1: Date, date2: Date): boolean {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }

    return (
        <ul className="grid grid-cols-7 w-full">
            {dateList.map((date, index) => (
                <li key={index} >
                    {date ? <DateBox date={date} onClick={onClick} schedules={getSchedulesByDay(date)} /> : <DateBox blank onClick={onClick} />}
                </li>
            ))}
        </ul>
    );
};