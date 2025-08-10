import RecordChart from "@/components/RecordChart";
import { currentUser } from "@clerk/nextjs/server";
import ExpenseStats from "@/components/ExpenseStats";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className=" px-8 sm:px-2 py-10 sm:py-5 min-h-screen bg-white dark:bg-black ">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 px-3 md:px-5 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white font-sans">
            Welcome back, <span>{user?.fullName}</span>
          </h1>
          <p className="mt-1 font-semibold text-gray-500">
            Here's your overview of your expenses
          </p>
        </div>

        <div className="text-sm font-medium dark:text-white text-gray-600">
          <p>
            Joined:{" "}
            {user?.createdAt &&
              new Date(user.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
          </p>
          <p>
            Last active:{" "}
            {user?.lastActiveAt
              ? new Date(user.lastActiveAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Today"}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="w-full mb-6">
        <div className="rounded-xl dark:bg-black  bg-white p-4">
          <RecordChart />
        </div>
      </div>

      {/* Expense Stats */}
      <div className="w-full mb-6">
        <div className="rounded-xl dark:bg-black bg-white p-4">
          <ExpenseStats />
        </div>
      </div>
    </div>
  );
}
