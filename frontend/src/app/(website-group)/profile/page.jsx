import Profilepage from "../../../components/website/Profile/Profilepage"
import getMe from '@/services/auth'
import React from 'react'

export default async function page() {
    const {user} = await getMe()
    console.log(user)
  return (
    <Profilepage user={user} name={user.name} />
  )
}
