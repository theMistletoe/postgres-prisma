import { CalendarHeader } from '@/components/calendar/CalendarHeader'
import { DateBoxList } from '@/components/calendar/DateBoxList'

export const dynamic = 'force-dynamic'

const today = new Date();

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <CalendarHeader date={today} />
      <DateBoxList date={today} />
    </main>
  )
}
