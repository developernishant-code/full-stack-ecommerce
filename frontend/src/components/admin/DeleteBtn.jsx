'use client'
import axios from 'axios'
import React from 'react'
import { axiosinstance, notify } from '@/helper/helper';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function DeleteBtn({ id,endpoint }) {
    const router = useRouter()
    function deleteHandler() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({

                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"

            },
                axiosinstance.delete(`http://localhost:7000/${endpoint}/delete/${id}`)
                    .then((res) => {
                        if (res.data.success) {
                            notify(res?.data?.message, true);
                            router.refresh()
                        }
                    })
                    .catch((err) => {
                        // console.log(err)
                        const message =
                            err?.response?.data?.message ||
                            err?.message ||
                            "Something went wrong";

                        notify(message, false);
                    })
            );
        });

    }
    return (
        <button onClick={deleteHandler} className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">
            Delete
        </button>
    )
}
