"use client";
// import Link from "next/link";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const UserManagement = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="app-content">
        <Header />
        <main>
          <h1>User Management</h1>
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
