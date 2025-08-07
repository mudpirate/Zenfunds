"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-gray-100/50 dark:border-gray-700/50 mt-16">
      {/* Gradient top accent line */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo and description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <h2 className="text-xl font-bold bg-black dark:text-white bg-clip-text text-transparent">
                Zenfunds AI
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Track, analyze, and understand your finances with AI-powered
              insights and smart budgeting tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Features
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-3">AI-Powered Insights</li>
              <li className="flex items-center gap-3">Smart Categorization</li>
              <li className="flex items-center gap-3">Analytics Dashboard</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Zenfunds. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></span>
            Made by Nomesh
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
