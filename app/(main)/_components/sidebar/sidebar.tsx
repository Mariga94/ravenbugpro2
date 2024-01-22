"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ChevronRightCircle,
  Folder,
  LineChart,
  Settings,
  Users,
  Goal,
} from "lucide-react";
import { menuItems } from "./menuItems";
import MenuLink from "./menuLink";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const [isWorkspaceCollapsed, setIsWorkspaceCollapsed] =
    useState<boolean>(false);

  const toggleSidebar = (event: React.MouseEvent) => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleWorkspace = () => {
    setIsWorkspaceCollapsed(!isWorkspaceCollapsed);
  };

  return (
    <aside className="realative">
      <div
        className={cn(
          "h-screen bg-secondary overflow-y-auto flex flex-col gap-y-2 w-60 transform transition-all ease-in-out ",
          isCollapsed && "w-5"
        )}
      >
        <div className="border-b-2 h-20 flex flex-col justify-center px-5">
          <h2 className="font-semibold">Current Workspace</h2>
        </div>
        {isCollapsed ? (
          <Button
            variant="ghost"
            className={cn(
              "absolute top-4 -right-4  flex items-center justify-center z-50"
            )}
            onClick={toggleSidebar}
          >
            <ChevronRightCircle />
          </Button>
        ) : (
          <Button
            variant="ghost"
            className={cn("absolute top-5 right-2 hover:bg-gray-300 z-[99]")}
            onClick={toggleSidebar}
          >
            <ChevronLeft />
          </Button>
        )}
        <div className="px-10 flex flex-col space-y-6">
       
          <div className="space-y-6">
            <h3
              className={cn("font-semibold flex flex-row justify-between")}
              onClick={toggleWorkspace}
            >
              Workspace 1
              {isWorkspaceCollapsed ? <ChevronDown /> : <ChevronUp />}
            </h3>
            <ul
              className={cn(
                "flex flex-col  transform transition scale-100 origin-top ease-in-out",
                isWorkspaceCollapsed && "scale-0"
              )}
            >
              <li className="px-5 flex flex-row items-center gap-x-2 hover:bg-gray-200 p-2 hover:rounded-md">
                <Goal size={20} />
                <p>Goal</p>
              </li>
              <li className="px-5 flex flex-row items-center gap-x-2 hover:bg-gray-200 p-2 hover:rounded-md">
                <LineChart size={20} />
                <p>Dashboard</p>
              </li>
              <li className="px-5 flex flex-row items-center gap-x-2 hover:bg-gray-200 p-2 hover:rounded-md">
                <Folder size={20} />
                <p>Project</p>
              </li>
              <li className="px-5 flex flex-row items-center gap-x-2 hover:bg-gray-200 p-2 hover:rounded-md">
                <Users size={20} />
                <p>Teams</p>
              </li>
              <li className="px-5 flex flex-row items-center gap-x-2 hover:bg-gray-200 p-2 hover:rounded-md">
                <Settings size={20} />
                <p>Settings</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
