import { DateBoxList } from '@/components/calendar/DateBoxList'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <DateBoxList date={new Date("2024-07-06")} />
    </main>
  )
}
