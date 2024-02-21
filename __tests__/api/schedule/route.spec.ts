import { POST } from "@/app/api/schedule/route";
import prisma from '@/lib/prisma'

describe("schedule api route", () => {

    beforeEach(async () => {
        await prisma.schedule.deleteMany({});
    });

    describe("POST", () => {
        it("should create a schedule", async () => {
            const result = await POST({
                json: async () => ({
                    title: "Test",
                    startTime: "2021-01-01T00:00:00.000Z",
                    endTime: "2021-01-01T01:00:00.000Z",
                }),
            } as any);

            const returnedSchedule = await result.json();
            expect(returnedSchedule).toEqual({
                id: expect.any(Number),
                title: "Test",
                startTime: "2021-01-01T00:00:00.000Z",
                endTime: "2021-01-01T01:00:00.000Z",
            });

            prisma.schedule.findFirst({
                where: {
                    id: returnedSchedule.id,
                },
            }).then((schedule) => {
                expect(schedule).toEqual({
                    id: returnedSchedule.id,
                    title: "Test",
                    startTime: new Date("2021-01-01T00:00:00.000Z"),
                    endTime: new Date("2021-01-01T01:00:00.000Z"),
                });
            });
        });
    });
});