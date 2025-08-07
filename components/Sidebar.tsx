"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/public/newlogo-removebg-preview.png";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", logo: <MdDashboard /> },
    {
      label: "Add Expenses",
      href: "/dashboard/addexpense",
      logo: <FaMoneyBillWave />,
    },
    {
      label: "AI Analysis",
      href: "/dashboard/aianalysis",
      logo: <BsGraphUp />,
    },
    {
      label: "Transaction History",
      href: "/transactions",
      logo: <FaHistory />,
    },
  ];

  return (
    <div className="flex">
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden p-4 focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-green-100 rounded-zl text-white w-64 px-6 py-8 min-h-screen transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 fixed md:static top-0 left-0 z-40 flex flex-col justify-between`}
      >
        {/* Brand / User Profile */}
        <div className="flex flex-col justify-center items-center gap-3">
          {/* Brand */}
          <Link href="/">
            <div className="text-3xl flex gap-2 justify-center items-center font-extrabold text-black mb-8">
              <Image alt="l" src={logo} width={40} height={30} />
              <span className="text-green-800">Zenfunds</span>
            </div>
          </Link>

          {/* User Profile */}

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 flex gap-3  text-black items-center py-2 rounded-lg hover:bg-green-300 transition-colors font-medium"
              >
                <span>{item.logo}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="px-4 py-2 mt-10 rounded-xl  border-black  dark:bg-black/30 backdrop-blur-md   dark:border-gray-700  transition-all  max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Have a question?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              send us a message and we will contact you in no time
            </p>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg ">
            {user?.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-sm  text-black font-semibold">
                {user?.fullName}
              </p>
              <p className="text-xs text-black">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Optional footer or logout button */}
        <div className="text-xs text-gray-500 text-center mt-10 md:mt-0">
          © 2025 ZenFunds
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
