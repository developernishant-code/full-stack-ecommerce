import Checkoutcomp from '@/components/website/Checkout/Checkoutcomp'
import getMe from '@/services/auth'
import React from 'react'

export default async function page() {
  const {user} = await getMe()
  return (
    <Checkoutcomp user={user} />
  )
}
