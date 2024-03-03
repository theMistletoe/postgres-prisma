"use client";
import { useEffect, useState } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { DateBoxList } from "./DateBoxList";
import { ScheduleFormModal } from "./ScheduleFormModal";
import { useSchedule } from "@/hooks/useSchedule";

export default function Calendar({ date }: { date: Date }) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {schedules, getSchedules} = useSchedule();

    function handleDateBoxClick(date: Date) {
        setSelectedDate(date);
        setIsOpen(true);
    }

    useEffect(() => {
        getSchedules();
    }, [date]);

    return (
        <>
            <CalendarHeader date={date} />
            <DateBoxList date={date} onClick={handleDateBoxClick} schedules={schedules} />
            {selectedDate && (
                <ScheduleFormModal date={selectedDate} isOpen={isOpen} onClose={() => setIsOpen(false)} onScheduleCreate={() => {}} />
            )}
        </>
    )
};