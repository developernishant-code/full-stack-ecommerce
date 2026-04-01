"use client";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="max-w-md w-full mx-auto">
            <h1 className="text-2xl font-semibold text-teal-600 mb-1">
                Welcome Back
            </h1>
            <p className="text-xs text-gray-500 tracking-widest mb-8">
                LOGIN TO CONTINUE
            </p>

            <form className="space-y-6">

                {/* Email */}
                <div>
                    <label className="label">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="example@gmail.com"
                        className="input"
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <label className="label">Password</label>
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="•••"
                        className="input pr-10"
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9 cursor-pointer text-gray-500"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                {/* Forgot password */}
                <div className="text-sm text-gray-400">
                    <Link href="/forgot-password">
                        Forget Password ?
                    </Link>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium"
                >
                    LOGIN
                </button>

                {/* Register link */}
                <p className="text-sm text-center text-gray-500">
                    NEW USER ?{" "}
                    <Link
                        href="/register"
                        className="text-green-600 font-medium"
                    >
                        SIGN UP
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default LoginForm;
