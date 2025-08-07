"use client";

import { useState } from "react";

export default function AddExpensePage() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Expense:", form);

    // 👉 Add your backend integration here (API route or action)
  };

  return (
    <div className="min-h-screen  max-w-7xl w-[100vw] bg-background text-foreground flex items-center ">
      <form
        onSubmit={handleSubmit}
        className=" border w-1/2 ml-40 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Expense</h2>

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-background text-foreground dark:border-zinc-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-background text-foreground dark:border-zinc-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-background text-foreground dark:border-zinc-700"
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-background text-foreground dark:border-zinc-700"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}
