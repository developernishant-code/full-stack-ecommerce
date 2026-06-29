"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
    FiMapPin,
    FiCreditCard,
    FiTruck,
    FiShoppingBag,
    FiArrowLeft,
    FiCheckCircle,
    FiDollarSign,
} from "react-icons/fi";

import { useSelector } from "react-redux";
import { axiosinstance } from "@/helper/helper";
import { useRouter } from "next/navigation";
import { useRazorpay } from "react-razorpay";

export default function Checkoutcomp({ user }) {
    const { error, isLoading, Razorpay } = useRazorpay();

    // =========================
    // STATES
    // =========================
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [loading, setLoading] = useState(false);

    // =========================
    // DATA
    // =========================
    const addresses = user?.addresses || [];
    const cart = useSelector((store) => store.cart);

    // =========================
    // HANDLE ORDER
    // =========================
    const handleOrder = async () => {
        try {
            if (!addresses.length) {
                alert("Please add a shipping address");
                return;
            }

            if (!cart?.items?.length) {
                alert("Your cart is empty");
                return;
            }

            setLoading(true);

            const orderData = {
                address: addresses[selectedAddress],
                paymentMethod,
            };

            try {
                const response = await axiosinstance.post(
                    "order/place",
                    orderData
                );

                if (paymentMethod == "cod") {
                    if (response.data.success) {
                        router.push(
                            `/thank-you?orderId=${response.data.orderId}`
                        );
                    }
                } else {
                    const options = {
                        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                        currency: "INR",
                        name: "Company",
                        description: "Test Transaction",
                        order_id: response.data.payment_order_Id,

                        handler: async (response) => {
                            
                            try {
                                const VerifyResponse = await axiosinstance.post("order/place",response)
                                console.log(VerifyResponse)
                            } catch (error) {
                                console.log(error)
                            }
                        },

                        prefill: {
                            name: user.name,
                            email: user.email,
                            contact: "6546354651",
                        },

                        theme: {
                            color: "#F37254",
                        },
                    };

                    const razorpayInstance = new Razorpay(options);
                    razorpayInstance.open();
                }
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
            alert(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50/50 py-8 md:py-12 text-slate-800 antialiased">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* BACK BUTTON */}
                <div className="mb-6">
                    <Link
                        href="/cart"
                        className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-slate-400 hover:text-teal-600 uppercase transition-colors"
                    >
                        <FiArrowLeft size={14} strokeWidth={2.5} />
                        Back To Cart Matrix
                    </Link>
                </div>

                {/* PAGE TITLE */}
                <div className="mb-8 space-y-1">
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                        Secure Checkout
                    </h1>

                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Finalize your transaction attributes cleanly
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT SIDE */}
                    <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                        {/* ADDRESS SECTION */}
                        <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-5">
                            {/* HEADER */}
                            <div className="flex items-center justify-between gap-4 w-full border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-2">
                                    <FiMapPin
                                        className="text-teal-600 shrink-0"
                                        size={16}
                                    />

                                    <h2 className="text-xs font-black tracking-wider text-slate-900 uppercase">
                                        Shipping Destination Address
                                    </h2>
                                </div>

                            <Link href={"/profile"}>
                                <button className="flex items-center justify-center gap-2 bg-teal-50/60 border border-teal-100 hover:bg-teal-600 hover:text-white text-teal-600 text-[10px] sm:text-[11px] font-black tracking-widest uppercase px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl transition-all duration-200 cursor-pointer whitespace-nowrap">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={3}
                                        stroke="currentColor"
                                        className="w-3.5 h-3.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>

                                    Add New Address
                                </button>
                            </Link>
                                
                            </div>

                            {/* ADDRESS CARDS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                                {addresses.map((item, index) => {
                                    const isSelected =
                                        selectedAddress === index;

                                    return (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                setSelectedAddress(index)
                                            }
                                            className={`relative border p-5 rounded-2xl flex flex-col justify-between gap-4 transition-all cursor-pointer group select-none
                                            ${
                                                isSelected
                                                    ? "border-teal-500 bg-teal-50/40"
                                                    : "border-slate-200/80 bg-slate-50/40 hover:border-slate-300"
                                            }`}
                                        >
                                            <div className="space-y-1.5">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-xs font-black text-slate-700 group-hover:text-slate-900 uppercase tracking-wide transition-colors">
                                                        {item.isDefault
                                                            ? "Default Address"
                                                            : "Saved Address"}
                                                    </h4>

                                                    {isSelected && (
                                                        <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                                                            <FiCheckCircle
                                                                className="text-white"
                                                                size={12}
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                <p className="text-xs font-black text-slate-800 uppercase tracking-tight">
                                                    {item.fullName}
                                                </p>

                                                <p className="text-xs text-slate-400 group-hover:text-slate-500 font-bold leading-relaxed uppercase tracking-wide transition-colors">
                                                    {item.addressLine},
                                                    <br />
                                                    {item.city}, {item.state} -{" "}
                                                    {item.pincode}
                                                    <br />
                                                    {item.country}
                                                </p>
                                            </div>

                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-t border-slate-100/60 pt-3">
                                                Phone: {item.phone}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* PAYMENT SECTION */}
                        <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-4">
                            <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
                                <FiCreditCard
                                    className="text-teal-600"
                                    size={16}
                                />

                                <h2 className="text-xs font-black tracking-wider text-slate-900 uppercase">
                                    Select Payment Authorization Method
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* COD */}
                                <div
                                    onClick={() =>
                                        setPaymentMethod("cod")
                                    }
                                    className={`border-2 rounded-2xl p-4 flex items-start gap-3 cursor-pointer transition-all select-none
                                    ${
                                        paymentMethod === "cod"
                                            ? "border-teal-500 bg-teal-50/10"
                                            : "border-slate-100 bg-slate-50/40 hover:border-slate-200"
                                    }`}
                                >
                                    <div
                                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5
                                        ${
                                            paymentMethod === "cod"
                                                ? "border-teal-500"
                                                : "border-slate-300"
                                        }`}
                                    >
                                        {paymentMethod === "cod" && (
                                            <div className="w-2 h-2 bg-teal-500 rounded-full" />
                                        )}
                                    </div>

                                    <div className="space-y-0.5">
                                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                                            <FiDollarSign />
                                            Cash On Delivery (COD)
                                        </h3>

                                        <p className="text-[11px] text-slate-400 font-medium leading-normal">
                                            Pay upon delivery safely at your
                                            doorstep.
                                        </p>
                                    </div>
                                </div>

                                {/* ONLINE PAYMENT */}
                                <div
                                    onClick={() =>
                                        setPaymentMethod("online")
                                    }
                                    className={`border-2 rounded-2xl p-4 flex items-start gap-3 cursor-pointer transition-all select-none
                                    ${
                                        paymentMethod === "online"
                                            ? "border-teal-500 bg-teal-50/10"
                                            : "border-slate-100 bg-slate-50/40 hover:border-slate-200"
                                    }`}
                                >
                                    <div
                                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5
                                        ${
                                            paymentMethod === "online"
                                                ? "border-teal-500"
                                                : "border-slate-300"
                                        }`}
                                    >
                                        {paymentMethod === "online" && (
                                            <div className="w-2 h-2 bg-teal-500 rounded-full" />
                                        )}
                                    </div>

                                    <div className="space-y-0.5">
                                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                                            <FiCreditCard />
                                            Instant Online Payment
                                        </h3>

                                        <p className="text-[11px] text-slate-400 font-medium leading-normal">
                                            Pay securely using UPI, Cards, or
                                            Net Banking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 space-y-6">
                        {/* SUMMARY CARD */}
                        <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_10px_40px_rgba(15,23,42,0.02)] space-y-5">
                            {/* HEADER */}
                            <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
                                <FiShoppingBag
                                    className="text-slate-900"
                                    size={16}
                                />

                                <h2 className="text-xs font-black tracking-wider text-slate-900 uppercase">
                                    Order Summary Review
                                </h2>
                            </div>

                            {/* ITEMS */}
                            <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                                {cart?.items?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100/50"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center p-1">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.name}
                                                className="w-full h-full object-contain mix-blend-multiply"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-xs font-black text-slate-800 truncate uppercase tracking-tight">
                                                {item.name}
                                            </h4>

                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">
                                                QTY: {item.qty}
                                            </p>
                                        </div>

                                        <div className="text-right shrink-0">
                                            <span className="text-xs font-black text-slate-900 tracking-tight">
                                                $
                                                {item.final_price * item.qty}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* TOTALS */}
                            <div className="border-t border-slate-50 pt-4 space-y-2.5 text-xs">
                                <div className="flex justify-between font-bold text-slate-400 uppercase tracking-wide">
                                    <span>Subtotal Aggregate</span>

                                    <span className="text-slate-700 font-black">
                                        ${cart.original_total}
                                    </span>
                                </div>

                                <div className="flex justify-between font-bold text-slate-400 uppercase tracking-wide items-center">
                                    <span className="flex items-center gap-1">
                                        <FiTruck
                                            size={13}
                                            className="text-teal-600"
                                        />
                                        Logistic Handling
                                    </span>

                                    <span className="text-teal-600 font-black tracking-widest text-[10px]">
                                        FREE
                                    </span>
                                </div>

                                <hr className="border-slate-50 my-1" />

                                <div className="flex justify-between items-baseline pt-1">
                                    <span className="text-xs font-black text-slate-900 uppercase tracking-wide">
                                        Total Payable Balance
                                    </span>

                                    <span className="text-xl font-black text-slate-900 tracking-tight">
                                        ${cart.final_total}
                                    </span>
                                </div>
                            </div>

                            {/* PLACE ORDER BUTTON */}
                            <button
                                onClick={handleOrder}
                                disabled={loading}
                                className={`w-full py-3.5 px-6 rounded-xl font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform active:scale-[0.99] mt-2
                                ${
                                    loading
                                        ? "bg-slate-400 cursor-not-allowed text-white"
                                        : "bg-slate-900 hover:bg-teal-600 text-white shadow-slate-900/5 cursor-pointer"
                                }`}
                            >
                                <FiCheckCircle
                                    size={14}
                                    strokeWidth={2.5}
                                />

                                {loading
                                    ? "Processing Order..."
                                    : "Authorized Place Order"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}