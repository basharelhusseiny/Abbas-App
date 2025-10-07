import { LayoutDashboard, MessageCircle, Newspaper } from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <div>
      <h3 className="text-center text-xl font-semibold hidden md:block">
        Admin Dashboard
      </h3>
      <div className="flex flex-col gap-5 mt-7">
        <Link
          href={"/admin"}
          className="flex items-center gap-3 text-gray-700 hover:text-gray-800 duration-300 underline"
        >
          <LayoutDashboard size={20} strokeWidth={2} />
          <span className="hidden md:block">Dashboard</span>
        </Link>
        <Link
          href={"/admin/articles-table"}
          className="flex items-center gap-3 text-gray-700 hover:text-gray-800 duration-300 underline"
        >
          <Newspaper size={20} strokeWidth={2} />
          <span className="hidden md:block">Articles Table</span>
        </Link>
        <Link
          href={"/admin/comments-table"}
          className="flex items-center gap-3 text-gray-700 hover:text-gray-800 duration-300 underline"
        >
          <MessageCircle size={20} strokeWidth={2} />
          <span className="hidden md:block">Comments Table</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
