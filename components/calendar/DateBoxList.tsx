import { DateBox } from "./DateBox";

export function DateBoxList({date}: {date: Date}) {
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dateList = [];
    for (let i = firstDate.getDate(); i <= lastDate.getDate(); i++) {
        dateList.push(new Date(date.getFullYear(), date.getMonth(), i));
    }
    return (
        <ul className="grid grid-cols-7 w-full">
            {dateList.map((date, index) => (
                <li key={index}>
                    <DateBox date={date} />
                </li>
            ))}
        </ul>
    );
};
