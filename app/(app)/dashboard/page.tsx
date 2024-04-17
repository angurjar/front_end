"use client";
// import Link from "next/link";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const Dashboard = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="app-content">
        <Header />
        <main>Dashboard</main>
      </div>
    </div>
  );
};

export default Dashboard;
