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

    function convertStartTimeEndTimeToDate(schedule: {
        id: number;
        title: string;
        startTime: string;
        endTime: string;
    }) {
        return {
            ...schedule,
            startTime: convertToJST(new Date(schedule.startTime)),
            endTime: convertToJST(new Date(schedule.endTime)),
        };
    }

    function convertToJST(date: Date): Date {
        return new Date(new Date(date).toLocaleString("ja-JP", {
            timeZone: "Asia/Tokyo",
        }));
    }

    function getSchedules() {
        fetch(`/api/schedule`)
            .then((res) => res.json())
            .then((data) => {
                const convertedSchedules = data.map((schedule: {
                    id: number;
                    title: string;
                    startTime: string;
                    endTime: string;
                }) => convertStartTimeEndTimeToDate(schedule))

                setSchedules(convertedSchedules);
            });
    }

    return { schedules, addSchedule, getSchedules };
}