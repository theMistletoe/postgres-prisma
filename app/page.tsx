import Calendar from '@/components/calendar/Calendar';

export const dynamic = 'force-dynamic'

const today = new Date(new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));
// FIXME: ここで全体でやるよりはviewの部分だけJSTに変換するようにしたい

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Calendar date={today} />
    </main>
  )
}
