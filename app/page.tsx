import { CalendarHeader } from '@/components/calendar/CalendarHeader'
import { DateBoxList } from '@/components/calendar/DateBoxList'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <CalendarHeader date={new Date()} />
      <DateBoxList date={new Date()} />
    </main>
  )
}
