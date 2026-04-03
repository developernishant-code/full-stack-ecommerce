import { getCategoryById } from '@/api/Categoryapi'
import EditCateogy from '@/components/admin/EditCategory'
import React from 'react'

export default async function page({ params }) {
    const resolvePromise = await params
    const category = await getCategoryById(resolvePromise.category_id)
    const allcategories = category != null ? category.allcategories : {}
    return (
        <EditCateogy category={allcategories} />
    )
}
