import Image from 'next/image'
import ClockWidget from "./component/ClockWidget"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ClockWidget />
    </main>
  )
}