"use client";

import { useState, useEffect } from "react";
import { getAIInsights } from "@/app/actions/getAllInsights";
import { generateInsightAnswer } from "@/app/actions/generateInsightAnswers";
import { FaRobot } from "react-icons/fa";

interface InsightData {
  id: string;
  type: "warning" | "info" | "success" | "tip";
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

interface AIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}

const AIInsights = () => {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [aiAnswers, setAiAnswers] = useState<AIAnswer[]>([]);

  const loadInsights = async () => {
    setIsLoading(true);
    try {
      const newInsights = await getAIInsights();
      setInsights(newInsights);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("❌ AIInsights: Failed to load AI insights:", error);
      // Fallback to mock data if AI fails
      setInsights([
        {
          id: "fallback-1",
          type: "info",
          title: "AI Temporarily Unavailable",
          message:
            "We're working to restore AI insights. Please check back soon.",
          action: "Try again later",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = async (insight: InsightData) => {
    if (!insight.action) return;

    // Check if answer is already loading or exists
    const existingAnswer = aiAnswers.find((a) => a.insightId === insight.id);
    if (existingAnswer) {
      // Remove the answer if it already exists (toggle functionality)
      setAiAnswers((prev) => prev.filter((a) => a.insightId !== insight.id));
      return;
    }

    // Add loading state
    setAiAnswers((prev) => [
      ...prev,
      {
        insightId: insight.id,
        answer: "",
        isLoading: true,
      },
    ]);

    try {
      // Generate question based on insight title and action
      const question = `${insight.title}: ${insight.action}`;

      // Use server action to generate AI answer
      const answer = await generateInsightAnswer(question);

      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id ? { ...a, answer, isLoading: false } : a
        )
      );
    } catch (error) {
      console.error("❌ Failed to generate AI answer:", error);
      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id
            ? {
                ...a,
                answer:
                  "Sorry, I was unable to generate a detailed answer. Please try again.",
                isLoading: false,
              }
            : a
        )
      );
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "warning":
        return "⚠️";
      case "success":
        return "✅";
      case "tip":
        return "💡";
      case "info":
        return "ℹ️";
      default:
        return "🤖";
    }
  };

  const getInsightColors = (type: string) => {
    switch (type) {
      case "warning":
        return "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20";
      case "success":
        return "border-l-green-500 bg-green-50 dark:bg-green-900/20";
      case "tip":
        return "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-900/20";
      case "info":
        return "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-900/20";
      default:
        return "border-l-gray-500 bg-gray-50 dark:bg-gray-800/50";
    }
  };

  const getButtonColors = (type: string) => {
    switch (type) {
      case "warning":
        return "text-yellow-700 dark:text-yellow-300 hover:text-yellow-800 dark:hover:text-yellow-200";
      case "success":
        return "text-green-700 dark:text-green-300 hover:text-green-800 dark:hover:text-green-200";
      case "tip":
        return "text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200";
      case "info":
        return "text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200";
      default:
        return "text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200";
    }
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return "Loading...";

    const now = new Date();
    const diffMs = now.getTime() - lastUpdated.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    return lastUpdated.toLocaleDateString();
  };

  return (
    <div className="bg-white/80 dark:bg-black backdrop-blur-sm min-h-screen p-4 sm:p-6 shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
      {/* Header Section */}
      <div className="flex flex-col justify-center w-full items-center mb-8">
        <div className="text-4xl sm:text-5xl mb-4 text-black dark:text-emerald-400">
          <FaRobot />
        </div>
        <h3 className="text-xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
          AI Finance Assitant
        </h3>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-8">
          Analyzing your spending patterns and get feedback for your spendings
        </p>
        <button
          onClick={loadInsights}
          disabled={isLoading}
          className="px-6 py-3 bg-black hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Generating...</span>
            </div>
          ) : (
            <>
              <span className="sm:hidden">Generate</span>
              <span className="hidden sm:inline">Generate your reports</span>
            </>
          )}
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-lg text-black dark:text-emerald-400 font-semibold">
              Analyzing your data.........
            </span>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-200 dark:border-gray-600"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-xl"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-lg w-3/4"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded-lg w-full"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded-lg w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Section */}
      {!isLoading && insights.length > 0 && (
        <div className="space-y-6">
          {/* Header with timestamp and refresh */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white/50 dark:bg-black rounded-xl border border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                AI Reports Generated
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-black dark:bg-emerald-900/50 text-white dark:text-emerald-300 px-3 py-1.5 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-white dark:bg-emerald-400 rounded-full"></span>
                <span>Updated {formatLastUpdated()}</span>
              </div>
              <button
                onClick={loadInsights}
                disabled={isLoading}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50"
              >
                <span className="hidden sm:inline">Refresh Insights</span>
                <span className="sm:hidden">Refresh</span>
              </button>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 gap-6">
            {insights.map((insight) => {
              const currentAnswer = aiAnswers.find(
                (a) => a.insightId === insight.id
              );

              return (
                <div
                  key={insight.id}
                  className={`relative overflow-hidden rounded-2xl p-6 border-2 hover:shadow-xl transition-all duration-300 ${getInsightColors(
                    insight.type
                  )}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                            insight.type === "warning"
                              ? "bg-yellow-200 dark:bg-yellow-800"
                              : insight.type === "success"
                              ? "bg-green-200 dark:bg-green-800"
                              : insight.type === "tip"
                              ? "bg-emerald-200 dark:bg-emerald-800"
                              : "bg-emerald-200 dark:bg-emerald-800"
                          }`}
                        >
                          {getInsightIcon(insight.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                              {insight.title}
                            </h4>
                            {insight.confidence && insight.confidence < 0.8 && (
                              <span className="inline-block px-2 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-semibold">
                                Preliminary
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                        {insight.message}
                      </p>

                      {insight.action && (
                        <div className="mb-4">
                          <button
                            onClick={() => handleActionClick(insight)}
                            className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-200 ${getButtonColors(
                              insight.type
                            )} hover:bg-white/80 dark:hover:bg-gray-700/80 border-2 border-current ${
                              currentAnswer
                                ? "bg-white/80 dark:bg-gray-700/80"
                                : "bg-white/40 dark:bg-gray-700/40"
                            }`}
                          >
                            <span>{insight.action}</span>
                            {currentAnswer?.isLoading ? (
                              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <span className="text-sm font-bold">
                                {currentAnswer ? "▲" : "▶"}
                              </span>
                            )}
                          </button>
                        </div>
                      )}

                      {/* AI Answer Display */}
                      {currentAnswer && (
                        <div className="mt-4 p-4 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-gray-600 shadow-inner">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                              <span className="text-white text-sm">🤖</span>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-2">
                                AI Analysis:
                              </h5>
                              {currentAnswer.isLoading ? (
                                <div className="space-y-2">
                                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-3 rounded-lg w-full"></div>
                                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-3 rounded-lg w-3/4"></div>
                                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-3 rounded-lg w-1/2"></div>
                                </div>
                              ) : (
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                  {currentAnswer.answer}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
                <span className="font-medium">
                  Powered by Advanced AI Analysis
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && insights.length === 0 && lastUpdated && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No insights available
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Click "Generate your reports" to get AI-powered insights
          </p>
        </div>
      )}
    </div>
  );
};

export default AIInsights;
