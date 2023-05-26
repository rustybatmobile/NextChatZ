import Button from '@/components/ui/Button'
import { db } from '@/lib/db'
import Image from 'next/image'

export default async function Home() {
  return (
    <div>
        <Button variant = "ghost">Click me</Button>
    </div>
  )
}
