import AdminSidebar from "./AdminSidebar";

interface AdminDashboardProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminDashboardProps) => {
  return (
    <div className="h-[calc(100vh-120px)] flex">
      <div className="md:w-2xs h-full bg-gray-200 p-5">
        <AdminSidebar />
      </div>
      <div className="w-full overflow-auto">{children}</div>
    </div>
  );
};

export default AdminLayout;
