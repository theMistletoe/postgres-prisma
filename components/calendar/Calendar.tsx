import { CalendarHeader } from "./CalendarHeader";
import { DateBoxList } from "./DateBoxList";

export default function Calendar({ date }: { date: Date }) {
    return (
        <>
            <CalendarHeader date={date} />
            <DateBoxList date={date} />
        </>
    )
  }
  