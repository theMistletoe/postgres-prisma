import { DateBox } from "./DateBox";

export function DateBoxList({date,onClick}: {date: Date, onClick: (event: Date) => void}) {
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
            {dateList.map((date, index) => (
                <li key={index} >
                    {date ? <DateBox date={date} onClick={onClick} /> : <DateBox blank onClick={onClick} />}
                </li>
            ))}
        </ul>
    );
};