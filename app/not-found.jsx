'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NoMatch(props) {
  const router = useRouter()
  useEffect(() => {
    router.replace('/')
  })

  return null
}
