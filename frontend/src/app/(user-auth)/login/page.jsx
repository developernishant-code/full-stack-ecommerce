'use client'

import React, { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { axiosinstance, notify } from '@/helper/helper';
import { FiMail, FiLock, FiShoppingCart, FiArrowRight } from 'react-icons/fi';

const LoginPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      notify("Please fill all fields", false);
      return;
    }

    setloading(true);

    axiosinstance
      .post("/user/login", form)
      .then(async (res) => {
        if (res.data.success) {
          notify(res?.data?.message, true);
          setForm({ email: "", password: "" });
          const cartItems =
            JSON.parse(localStorage.getItem("cart")) || null;

          const Items = cartItems?.items || [];
          try {
            const cartResp = await axiosinstance.post("cart/sync", {
              localCart: JSON.stringify(Items)
            })
            const cartData = cartResp?.data?.cart
            let final_total = 0
            let original_total = 0
            const items = cartData.map((item) => {
              const { name, _id, original_price, final_price, discount_price, price, thumbnail, stock } = item.productId
              final_total += (final_price * item.qty)
              original_total += (original_price * item.qty)
              return {
                name, _id, original_price, final_price, discount_price, price, thumbnail, stock, qty: item.qty
              }
            })
            localStorage.setItem(
              "cart",
              JSON.stringify({
                final_total,
                original_total,
                items,
              })
            )
            router.push("/")
          } catch (error) {
            console.log(error)
          }

          router.push("/");
        }
      })
      .catch((err) => {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong";

        notify(message, false);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 antialiased selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* ================= CARD CONTAINER ================= */}
      <div className="w-full max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.06)] grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        
        {/* ================= LEFT SIDE: DECORATIVE PANEL (Hidden on Mobile) ================= */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-br from-teal-600 to-teal-500 p-8 lg:p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          
          {/* Header Typography */}
          <div className="relative z-10 text-center space-y-3 mt-4">
            <h2 className="text-3xl font-black text-white tracking-tight uppercase leading-none">
              Start Your <br /> Journey
            </h2>
            <p className="text-xs font-medium text-teal-50/80 max-w-[240px] mx-auto leading-relaxed">
              Join thousands of users and manage your shopping cart effortlessly.
            </p>
          </div>

          {/* Embedded Image Mockup Box Layout */}
          <div className="relative mx-auto w-full max-w-[280px] aspect-[4/3] rounded-3xl border-4 border-teal-400/30 overflow-hidden shadow-xl group">
            <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-amber-400 border border-amber-300 shadow-md flex items-center justify-center text-slate-900">
              <FiShoppingCart size={13} strokeWidth={2.5} />
            </div>

            <img 
              src="/login.png" 
              alt="E-commerce Lifestyle"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 via-transparent to-transparent opacity-60 mix-blend-multiply" />
          </div>

          {/* Core Footer Mark */}
          <div className="text-[10px] font-black text-teal-200/50 uppercase tracking-widest text-center relative z-10">
            NEXUSGRID SYSTEM
          </div>
        </div>

        {/* ================= RIGHT SIDE: LOGIC CONTAINER ================= */}
        <div className="col-span-1 md:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          
          <div className="mb-8 space-y-1.5">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
              Welcome Back
            </h1>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Please enter your account authorization details
            </p>
          </div>

          {/* Form Processing Area */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black tracking-wider text-slate-400 uppercase block pl-1">
                Email Address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiMail size={16} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400/80 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/5 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black tracking-wider text-slate-400 uppercase block pl-1">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiLock size={16} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  className="block w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400/80 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/5 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>

            {/* Submit Action Block */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3.5 px-6 rounded-xl font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-md shadow-teal-600/10 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? "Logging in..." : "LOGIN"}
                {!loading && <FiArrowRight size={13} strokeWidth={3} />}
              </button>
            </div>

          </form>

          {/* Registration Redirect Layout footer */}
          <div className="mt-10 text-center">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
              New user?{" "}
              <Link 
                href="/register" 
                className="text-teal-600 hover:text-teal-700 font-black hover:underline ml-1 uppercase tracking-wider"
              >
                Sign up
              </Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;