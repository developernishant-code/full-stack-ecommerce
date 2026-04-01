import React from "react";
import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">

      {/* Left Side */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-gray-800">
          Admin Panel
        </h1>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Notifications */}
        <button className="relative">
          <Bell className="text-gray-600" size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-9 h-9 rounded-full"
          />

          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">
              Admin User
            </p>
            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}