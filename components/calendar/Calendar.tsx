"use client";

import { useState } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { DateBoxList } from "./DateBoxList";

export default function Calendar({ date }: { date: Date }) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    function handleDateBoxClick(date: Date) {
        setSelectedDate(date);
    }

    return (
        <>
            <CalendarHeader date={date} />
            <DateBoxList date={date} onClick={handleDateBoxClick} />
            {selectedDate && (
                <p>{selectedDate.toISOString().slice(0, 10)}の予定</p>
            )}
        </>
    )
};