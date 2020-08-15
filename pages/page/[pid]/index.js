import React from 'react'
import {useRouter, Router} from 'next/router'
import {route} from 'next/dist/next-server/server/router'

export default function pid() {
  const router = useRouter()
  const {pid} = router.query
  return <div>Page id :{pid}</div>
}
