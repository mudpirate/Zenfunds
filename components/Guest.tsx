"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "./Footer";

const Guest = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleClick = () => {
    if (isSignedIn) {
      router.push("/dashboard/main");
    } else {
      router.push("/sign-in");
    }
  };
  const handleClick2 = () => {
    if (isSignedIn) {
      router.push("/dashboard/aianalysis");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="font-sans  bg-white  dark:bg-black text-gray-800 dark:text-gray-200 min-h-screen transition-all duration-300">
      {/* Hero Section */}
      <section className="bg-green-50  dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Track. <span className="text-green-500">Learn.</span> Grow.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleClick}
              className="bg-black hover:bg-gray-900 dark:border-2 text-white font-semibold px-6 py-3 rounded-xl transition hover:-translate-y-0.5"
            >
              Get Started
            </button>
            <button
              onClick={handleClick2}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition hover:-translate-y-0.5"
            >
              AI Assistant
            </button>
          </div>

          <Image
            src="/ss2.png"
            alt="Hero Image"
            width={900}
            height={700}
            className="rounded-2xl shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8  dark:bg-black  border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about ZenFunds AI and how it can
              improve your financial life.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is ZenFunds AI?",
                a: "It’s a smart financial management tool using AI to help you monitor spending, categorize expenses, and gain insight.",
              },
              {
                q: "How does the AI work?",
                a: "It analyzes your spending to detect patterns, categorize transactions, and offer suggestions for smarter budgeting.",
              },
              {
                q: "Is ZenFunds AI free?",
                a: "Yes, basic features are free. Premium plans unlock more advanced analytics and AI interactions.",
              },
            ].map(({ q, a }, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4  sm:px-6 lg:px-8  dark:bg-black  border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              <span className="text-black dark:text-white">Reviews</span>
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from our happy users who've mastered their money with
              ZenFunds AI.
            </p>
          </div>

          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah L.",
                initial: "S",
                quote:
                  "ZenFunds AI completely changed my budgeting. I now control my spending easily!",
              },
              {
                name: "John D.",
                initial: "J",
                quote:
                  "The smart categorization is amazing! I found leaks in my budget I never saw before.",
              },
              {
                name: "Emily R.",
                initial: "E",
                quote:
                  "Genuinely improved my habits with intelligent, tailored financial advice!",
              },
            ].map(({ name, initial, quote }, idx) => (
              <div
                key={idx}
                className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full font-bold shadow">
                    {initial}
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Verified User
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  “{quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Guest;
