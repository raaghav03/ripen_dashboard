import Sidebar from "../src/components/Sidebar";
import Topbar from "../src/components/Topbar";
import React from "react";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />

      </div>
    </div>
  );
}