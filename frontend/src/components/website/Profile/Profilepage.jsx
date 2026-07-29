'use client'

import React, { useState, useEffect } from 'react'
import { axiosinstance, notify } from '@/helper/helper'

import {
    FiUser,
    FiMapPin,
    FiShoppingBag,
    FiCheckCircle,
    FiPlusCircle,
    FiPhone,
    FiMail,
    FiInfo,
    FiTruck,
    FiClock
} from 'react-icons/fi'
import { useSelector } from 'react-redux'

export default function Profilepage({ user }) {

    const cart = useSelector((store) => store.cart)
    // console.log(user)
    const [addressesrr, setAddresses] = useState([])

    // Inline form capture payload mapping state (Matches your backend schema)
    const [form, setform] = useState({
        fullName: "",
        phone: "",
        pincode: "",
        addressLine: "",
        city: "",
        state: ""
    })

    // Sync state cleanly whenever user structural frames push updates
    useEffect(() => {
        if (user.addresses) {
            setAddresses(user.addresses)
        }
    }, [user])

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        axiosinstance.post("user/add-address", form)
            .then((res) => {
                setAddresses(res.data.addresses)
                notify(res.data.message, true)

                // Pure state input clear wipe
                setform({
                    fullName: "",
                    phone: "",
                    pincode: "",
                    addressLine: "",
                    city: "",
                    state: ""
                })
            })
            .catch((err) => {
                console.log(err)
                notify("Failed to transmit address telemetry parameters.", false)
            })
    }

    // Mock ordered products data segment mapped to complement layout parameters
    

    return (
        <div className="min-h-screen bg-slate-50/50 px-4 py-8 md:px-8 lg:px-12 text-slate-800 antialiased">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* ================= LEFT SIDE LAYOUT: IDENTITY CARD & DATA FORM ENGINES (5 Columns) ================= */}
                <div className="lg:col-span-5 space-y-6">

                    {/* PERSONAL INFORMATION ACCOUNT CARD */}
                    <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
                        <div className="h-28 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 flex items-center pl-6">
                            <h3 className="text-white text-[10px] font-black tracking-widest uppercase bg-teal-500/20 border border-teal-500/30 px-2.5 py-1 rounded-md">
                                Secure Account Node
                            </h3>
                        </div>

                        <div className="px-6 pb-6 relative">
                            <div className="-mt-14 flex justify-start pl-2">
                                <div className="w-24 h-24 rounded-2xl bg-slate-900 text-white border-4 border-white font-black text-2xl flex items-center justify-center shadow-md">
                                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                                </div>
                            </div>

                            <div className="mt-4 space-y-4">
                                <div>
                                    <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">{user.name}</h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Verified System User</p>
                                </div>

                                <div className="space-y-2 border-t border-slate-50 pt-3 text-xs font-bold text-slate-600">
                                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                                        <FiMail className="text-teal-600 shrink-0" size={14} />
                                        <span className="truncate">{user.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                                        <FiPhone className="text-teal-600 shrink-0" size={14} />
                                        <span>+91 9810292929</span>
                                    </div>
                                </div>

                                {/* MATRIX PERFORMANCE METRICS */}
                                <div className="grid grid-cols-2 gap-3 pt-1">
                                    <div className="bg-slate-900 p-3 rounded-xl text-white">
                                        <h4 className="font-black text-base text-teal-400 leading-tight">12</h4>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mt-0.5">Orders Logged</p>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                                        <h4 className="font-black text-base text-slate-900 leading-tight">{addressesrr.length}</h4>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mt-0.5">Saved Regions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW SHIPMENT DESTINATION FORM HOOK */}
                    <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-5">
                        <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
                            <FiPlusCircle className="text-teal-600" size={16} />
                            <h3 className="text-xs font-black tracking-wider text-slate-900 uppercase">Map New Destination</h3>
                        </div>

                        <form onSubmit={handlesubmit} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black tracking-wider text-slate-400 uppercase block pl-1">Consignee Identity</label>
                                <input
                                    type="text" required name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black tracking-wider text-slate-400 uppercase block pl-1">Contact Link Line</label>
                                <input
                                    type="text" required name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile Number"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black tracking-wider text-slate-400 uppercase block pl-1">Postal Zone Code</label>
                                <input
                                    type="text" required name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black tracking-wider text-slate-400 uppercase block pl-1">Street Parameter Array</label>
                                <textarea
                                    rows={3} required name="addressLine" value={form.addressLine} onChange={handleChange} placeholder="Complete Street Address Suite"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none resize-none focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black tracking-wider text-slate-400 uppercase block pl-1">City Hub</label>
                                    <input
                                        type="text" required name="city" value={form.city} onChange={handleChange} placeholder="City"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black tracking-wider text-slate-400 uppercase block pl-1">State Vector</label>
                                    <input
                                        type="text" required name="state" value={form.state} onChange={handleChange} placeholder="State"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-teal-600 text-white py-3.5 rounded-xl text-xs font-black tracking-widest uppercase shadow-md transition-all duration-300 cursor-pointer"
                            >
                                Commencing Save Data
                            </button>
                        </form>
                    </div>
                </div>

                {/* ================= RIGHT SIDE LAYOUT: ACTIVE REGISTRY LISTS & ANCHORED ORDERS (7 Columns) ================= */}
                <div className="lg:col-span-7 space-y-6">

                    {/* ADDRESS DIRECTORY VIEWPORT */}
                    <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-5">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-teal-600" size={16} />
                                <h3 className="text-xs font-black tracking-wider text-slate-900 uppercase">My Address Registry</h3>
                            </div>
                            <span className="text-[9px] font-black bg-teal-50 border border-teal-100 text-teal-600 px-3 py-1 rounded-lg uppercase tracking-wider">
                                {addressesrr.length} Saved Targets
                            </span>
                        </div>

                        {addressesrr.length === 0 ? (
                            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">No mapped destination pointers localized in profile.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {addressesrr.map((address, index) => (
                                    <div
                                        key={address.id || index}
                                        className="border border-slate-100 rounded-2xl p-4 flex flex-col justify-between bg-slate-50/40 hover:border-slate-200 transition-all"
                                    >
                                        <div className="space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                                                    {address.fullName || address.name}
                                                </h4>
                                                <span className="text-[8px] font-black bg-slate-900 text-white px-1.5 py-0.5 rounded uppercase tracking-widest">
                                                    {address.type || "Shipping Node"}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
                                                {address.addressLine || address.street},<br />
                                                {address.city}, {address.state} - {address.pincode}
                                            </p>
                                        </div>

                                        <div className="border-t border-slate-100/80 pt-3 mt-4 flex items-center justify-between text-[10px] font-bold">
                                            <span className="text-slate-400 tracking-wider">TEL: +91 {address.phone}</span>
                                            <div className="flex gap-2">
                                                <button className="text-slate-900 hover:text-teal-600 transition-colors uppercase font-black cursor-pointer">Edit</button>
                                                <span className="text-slate-200">|</span>
                                                <button className="text-rose-600 hover:text-rose-700 transition-colors uppercase font-black cursor-pointer">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* RECENTLY PURCHASED ITEMS LOG */}
                    <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-5">
                        <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
                            <FiShoppingBag className="text-teal-600" size={16} />
                            <h3 className="text-xs font-black tracking-wider text-slate-900 uppercase">Recently Ordered Elements</h3>
                        </div>

                        <div className="space-y-4">
                            
                                    

                                    <div className="p-4">
                                        {cart?.items?.map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 p-1 flex items-center justify-center shrink-0">
                                                    <img src={item.thumbnail} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-xs font-black text-slate-800 truncate uppercase tracking-tight">{item.name}</h4>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mt-0.5">Units Configured: {item.qty}</p>
                                                </div>
                                                <button className="text-[10px] font-black text-slate-900 border border-slate-200 hover:border-teal-500 hover:text-teal-600 px-3 py-1.5 rounded-xl uppercase tracking-widest transition-all bg-white flex items-center gap-1 cursor-pointer">
                                                    <FiTruck size={12} /> Track
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}