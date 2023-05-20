import Button from '@/components/ui/Button'
import { db } from '@/lib/db'
import Image from 'next/image'

export default async function Home() {
  await db.set("hello", "Harish");
  return (
    <div>
        <Button>Click me</Button>
    </div>
  )
}
