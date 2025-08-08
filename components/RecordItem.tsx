"use client";
import { useState } from "react";
import { Record } from "@/types/Record";
import deleteRecord from "@/app/actions/deleteRecord";
import { MdDelete } from "react-icons/md";

// Helper function to get category emoji
const getCategoryEmoji = (category: string) => {
  switch (category) {
    case "Food":
      return "🍔";
    case "Transportation":
      return "🚗";
    case "Shopping":
      return "🛒";
    case "Entertainment":
      return "🎬";
    case "Bills":
      return "💡";
    case "Healthcare":
      return "🏥";
    default:
      return "📦";
  }
};

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true); // Show loading spinner
    await deleteRecord(recordId); // Perform delete operation
    setIsLoading(false); // Hide loading spinner
  };

  // Determine border color based on expense amount
  const getBorderColor = (amount: number) => {
    if (amount > 100) return "border-red-500"; // High expense
    if (amount > 50) return "border-yellow-500"; // Medium expense
    return; // Low expense
  };

  return (
    <li
      className={`bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg  dark:border-gray-600/50 ${getBorderColor(
        record?.amount
      )} border-2 border-black hover:bg-white/80 dark:hover:bg-gray-700/80 relative min-h-[120px] sm:min-h-[140px] flex flex-col justify-between overflow-visible group`}
    >
      {/* Delete button positioned absolutely in top-right corner */}
      <button
        onClick={() => handleDeleteRecord(record.id)}
        className={`absolute top-25 right-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-white dark:border-gray-700 backdrop-blur-sm transform hover:scale-110 opacity-100  transition-all duration-200 ${
          isLoading ? "cursor-not-allowed scale-100" : ""
        }`}
        aria-label="Delete record"
        disabled={isLoading} // Disable button while loading
        title="Delete expense record"
      >
        {isLoading ? (
          <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <MdDelete />
        )}
      </button>

      {/* Content area with proper spacing */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
              {new Date(record?.date).toLocaleDateString()}
            </span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              ${record?.amount.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg">
              {getCategoryEmoji(record?.category)}
            </span>
            <span className="text-sm font-medium text-black dark:text-gray-300">
              {record?.category}
            </span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
          <p className="truncate break-words line-clamp-2">{record?.text}</p>
        </div>
      </div>
    </li>
  );
};

export default RecordItem;
