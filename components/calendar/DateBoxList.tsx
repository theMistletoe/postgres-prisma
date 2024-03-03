import { Schedule } from "@prisma/client";
import { DateBox } from "./DateBox";

export function DateBoxList(
    {
        date,
        schedules,
        onClick
    }:
    {
        date: Date,
        schedules?: Schedule[],
        onClick: (event: Date) => void
    }
) {
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dateList = [];
    for (let i = 1; i <= firstDate.getDay(); i++) {
        dateList.push(undefined);
    }
    for (let i = firstDate.getDate(); i <= lastDate.getDate(); i++) {
        dateList.push(new Date(date.getFullYear(), date.getMonth(), i));
    }
    return (
        <ul className="grid grid-cols-7 w-full">
            {dateList.map((date, index) => {
                const filteredSchedulesByDay = schedules?.filter((schedule) => {
                    return date?.toISOString().slice(0, 10) === schedule.startTime.toISOString().slice(0, 10);
                }); 
                
                return (
                    <li key={index} >
                        {date ? <DateBox date={date} onClick={onClick} schedules={filteredSchedulesByDay} /> : <DateBox blank onClick={onClick} />}
                    </li>
                )
            })}
        </ul>
    );
};