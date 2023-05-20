import Button from '@/components/ui/Button'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {


  useEffect(() => {
    fetch("https://apn1-amazing-redfish-35467.upstash.io/set/foo/bar", {
      headers: {
        Authorization: "Bearer AYqLASQgYzczZmU0ZWYtYTdmNi00NjA5LWFlN2YtMTU0ZGUwYjhiZjYzMzYxNTI5ODUzMGZiNDgyNDk4ZWEwYTFhMDA3OTA2Y2Y="
      }
    }).then(res => res).then(console.log)
  })

  return (
    <div>
        hjey<Button>Click me</Button>
    </div>
  )
}
