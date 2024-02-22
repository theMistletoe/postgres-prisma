"use client";

import { useState } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { DateBoxList } from "./DateBoxList";
import { ScheduleFormModal } from "./ScheduleFormModal";

export default function Calendar({ date }: { date: Date }) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function handleDateBoxClick(date: Date) {
        setSelectedDate(date);
        setIsOpen(true);
    }

    return (
        <>
            <CalendarHeader date={date} />
            <DateBoxList date={date} onClick={handleDateBoxClick} />
            {selectedDate && (
                <ScheduleFormModal date={selectedDate} isOpen={isOpen} onClose={() => setIsOpen(false)} onScheduleCreate={() => {}} />
            )}
        </>
    )
};