import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(_request: Request) {
    const schedules = await prisma.schedule.findMany();

    return new Response(JSON.stringify(schedules), {
        headers: {
            'content-type': 'application/json',
        },
    });
}

export async function POST(request: Request) {
    const body = await request.json();

    const result = await prisma.schedule.create({
        data: {
            title: body.title,
            startTime: new Date(body.startTime),
            endTime: new Date(body.endTime),
        }
    });

    return new Response(JSON.stringify(result), {
        headers: {
            'content-type': 'application/json',
        },
    });
}