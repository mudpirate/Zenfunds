// app/dashboard/layout.tsx
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[100vw] ">
      <div className=" h-[100vh]">
        <Sidebar />
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
}
