import { GetColorById } from '@/api/Color'
import EditColorForm from '@/components/admin/EditColor'
import React from 'react'

export default async function page({params}) {
    const resolvePromise = await params
    const data = await GetColorById(resolvePromise.color_id)
    const allcolors = data!=null ? data.allColor: null
    console.log(allcolors)
  return (
    <EditColorForm color={allcolors}  />
  )
}
