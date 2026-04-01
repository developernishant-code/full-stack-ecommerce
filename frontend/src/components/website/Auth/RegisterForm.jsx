"use client";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="max-w-md w-full mx-auto">
            <h1 className="text-2xl font-semibold text-teal-600 mb-1">
                Register
            </h1>
            <p className="text-xs text-gray-500 tracking-widest mb-8">
                JOIN TO US
            </p>

            <form className="space-y-6">

                {/* Name */}
                <div>
                    <label className="label">Your name</label>
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Jhon Deo"
                        className="input"
                    />
                </div>

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

                {/* Confirm Password */}
                <div className="relative">
                    <label className="label">Confirm Password</label>
                    <input
                        name="confirmPassword"
                        type={showConfirm ? "text" : "password"}
                        required
                        placeholder="•••"
                        className="input pr-10"
                    />
                    <span
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-9 cursor-pointer text-gray-500"
                    >
                        {showConfirm ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium"
                >
                    REGISTER
                </button>

                {/* Login link */}
                <p className="text-sm text-center text-gray-500">
                    ALREADY USER ?{" "}
                    <Link
                        href="/login"
                        className="text-green-600 font-medium"
                    >
                        LOGIN
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default RegisterForm;
