"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/users">User Management</Link>
    </aside>
  );
};

export default Sidebar;
