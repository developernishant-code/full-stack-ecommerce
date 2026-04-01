'use client'
import React, { useState } from 'react'
import {
  MdDashboardCustomize,
  MdOutlineCategory,
  MdSettings
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaBars } from "react-icons/fa";

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      name: "Overview",
      icon: MdDashboardCustomize,
      link: "/admin"
    },
    {
      name: "Product Categories",
      icon: MdOutlineCategory,
      link: "/admin/category"
    },
    {
      name: "Products",
      icon: FaProductHunt,
      link: "/admin/products"
    },
    {
      name: "Product Colors",
      icon: IoColorPaletteOutline,
      link: "/admin/colors"
    },
    {
      name: "Users",
      icon: FaUsers,
      link: "/admin/users"
    },
    {
      name: "Settings",
      icon: MdSettings,
      link: "/admin/settings"
    }
  ]

  return (
    <aside className={`${collapsed ? "w-20 bg-[#0a1727] h-screen flex items-center justify-center flex-col  transition-all duration-300" : "w-64 bg-[#0a1727] h-screen flex flex-col  transition-all duration-300"} `}>

      
      <div className="flex items-center justify-between px-5 py-4">
        <h1 className={`text-xl font-bold text-white ${collapsed && "hidden"}`}>
          🚀 Admin<span className="text-orange-500">Core</span>
        </h1>
        <FaBars
          className="text-white cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      
      <nav className="flex-1 px-3 space-y-2">

        {navItems.map((item, i) => {
          const Icon = item.icon
          const active = pathname === item.link

          return (
            <Link
              key={i}
              href={item.link}
              className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}
              p-3 rounded-xl text-sm transition-all
              ${active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-[#12243a]"}`}
            >
              <Icon size={20} />
              <span className={`${collapsed ? "hidden" : "block"}`}>
                {item.name}
              </span>
            </Link>
          )
        })}

      </nav>

      
      <div className="p-4 text-xs text-gray-400 text-center">
        {!collapsed && "© 2026 AdminCore"}
      </div>

    </aside>
  )
}   