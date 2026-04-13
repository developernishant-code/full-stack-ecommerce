'use client'
import { getProduct } from '@/api/Product';
import React from 'react'
import { useState, useEffect } from 'react';
import { BsEye } from 'react-icons/bs';
import ViewModel from './ViewModel';
import CategoryTable from '@/app/(admin-group)/admin/product/page';

export default function OpenModelbtn() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const allProduct = await getProduct();
                setProduct(allProduct.allProduct || []);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {
                open
                    ?
                    <ViewModel />
                    :
                    <CategoryTable />

            }
            <button
                onClick={() => {
                    setSelected(item);
                    setOpen(true);
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                <BsEye />
            </button>
        </>

    )
}
