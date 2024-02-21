import { Schedule } from "@prisma/client";
import { useState } from "react";

export function useSchedule() {
    const [schedules, setSchedules] = useState<Schedule[]>([]);

    const addSchedule = async (schedule: Omit<Schedule, 'id'>) => {
        const res = await fetch(`/api/schedule`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(schedule),
        });

        res.json().then((data) => {
            setSchedules([...schedules, data]);
        });
    };

    return { schedules, addSchedule };
}