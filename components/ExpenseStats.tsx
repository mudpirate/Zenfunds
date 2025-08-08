import React from "react";
import getUserRecord from "@/app/actions/getUserRecord";
import getBestWorstExpense from "@/app/actions/getBestWorstExpense";
import { IoBarChartSharp } from "react-icons/io5";

const ExpenseStats = async () => {
  try {
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getBestWorstExpense(),
    ]);

    const { record, daysWithRecords } = userRecordResult;
    const { bestExpense, worstExpense } = rangeResult;

    const validRecord = record || 0;
    const validDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageExpense = validRecord / validDays;

    return (
      <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-zinc-700">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl sm:text-3xl text-primary-foreground bg-primary p-2 rounded-full shadow">
            <IoBarChartSharp />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-white">
              Expense Statistics
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Your spending insights and summaries
            </p>
          </div>
        </div>

        {/* Average Expense */}
        <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 p-5 rounded-xl border border-zinc-200 dark:border-zinc-600 mb-4">
          <h4 className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 font-medium text-center mb-1">
            Average Daily Spending
          </h4>
          <p className="text-3xl text-center font-bold text-zinc-900 dark:text-white">
            ${averageExpense.toFixed(2)}
          </p>
          <p className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">
            Based on {validDays} day{validDays !== 1 && "s"} of data
          </p>
        </div>

        {/* Highest & Lowest Expenses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Highest */}
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-600 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1 font-medium">
              Highest Expense
            </p>
            <p className="text-xl font-bold text-red-600 dark:text-red-400">
              {bestExpense !== undefined ? `$${bestExpense}` : "No data"}
            </p>
          </div>

          {/* Lowest */}
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-600 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1 font-medium">
              Lowest Expense
            </p>
            <p className="text-xl font-bold text-green-600 dark:text-green-400">
              {worstExpense !== undefined ? `$${worstExpense}` : "No data"}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching expense statistics:", error);
    return (
      <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-md border border-red-200 dark:border-red-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300 p-2 rounded-full">
            ⚠️
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
              Failed to Load Statistics
            </h3>
            <p className="text-sm text-red-500 dark:text-red-400">
              Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ExpenseStats;
