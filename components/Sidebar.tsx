"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/public/newlogo-removebg-preview.png";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillWave, FaHistory } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const navItems = [
    { label: "Dashboard", href: "/dashboard/main", logo: <MdDashboard /> },
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
      href: "/dashboard/transactions",
      logo: <FaHistory />,
    },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close sidebar on mobile after clicking link
  };

  return (
    <div className="flex">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-4 fixed top-4 left-4 z-50 bg-white rounded-full shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-green-950 text-white w-63 px-6 py-8 min-h-screen transition-transform duration-300 ease-in-out 
  ${isOpen ? "translate-x-0" : "-translate-x-full"} 
  md:translate-x-0 fixed md:static top-0 left-0 z-40 flex flex-col`}
      >
        {/* Top: Logo and nav */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image alt="Logo" src={logo} width={40} height={30} />
              <span className="text-white text-2xl font-bold">ZenFunds</span>
            </Link>

            {/* Nav links */}
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-800 transition"
                  onClick={handleLinkClick}
                >
                  {item.logo}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Glassmorphism box */}
            <div className="mt-10 p-4 rounded-xl bg-white/10 backdrop-blur-lg">
              <h2 className="text-lg font-semibold">Have a question?</h2>
              <p className="text-sm text-white/80">
                Send us a message and we’ll contact you shortly.
              </p>
            </div>
          </div>

          {/* User info (Bottom-aligned due to flex-1 above) */}
          <div className=" flex items-center gap-3">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12 hover:scale-105 transition",
                },
              }}
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium">{user?.fullName}</p>
              <p className="text-xs text-white/70">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-white/50 text-center mt-4">
          © 2025 ZenFunds
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
