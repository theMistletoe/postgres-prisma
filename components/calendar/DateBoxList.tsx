import { DateBox } from "./DateBox";

export function DateBoxList({date}: {date: Date}) {
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dateList = [];
    for (let i = firstDate.getDate(); i <= lastDate.getDate(); i++) {
        dateList.push(new Date(date.getFullYear(), date.getMonth(), i));
    }
    return (
        <ul className="grid grid-cols-7 gap-4">
            {dateList.map((date, index) => (
                <li key={index} className="p-2">
                    <DateBox date={date} />
                </li>
            ))}
        </ul>
    );
};
