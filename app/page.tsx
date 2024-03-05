import Calendar from '@/components/calendar/Calendar';

export const dynamic = 'force-dynamic'

const today = new Date();

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Calendar date={today} />
    </main>
  )
}
