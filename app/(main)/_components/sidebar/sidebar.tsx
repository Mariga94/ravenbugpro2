"use client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
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

export const sideItems = [
  {
    label: "Goal",
    value: "goal",
    path: "/goal",
    icon: <Goal size={20} />,
  },
  {
    label: "Dashboard",
    value: "dashboard",
    path: "/dashboard",
    icon: <LineChart size={20} />,
  },
  {
    label: "Project",
    value: "project",
    path: "/project",
    icon: <Folder size={20} />,
  },
  {
    label: "Teams",
    value: "teams",
    path: "/teams",
    icon: <Users size={20} />,
  },
  {
    label: "Settings",
    value: "settings",
    path: "/settings",
    icon: <Settings size={20} />,
  },
];

const workspaces = [
  {
    _id: "1",
    workspaceName: "SpaceX",
    goals: [],
    projects: [],
    Teams: [],
    settings: [],
  },
  {
    _id: "2",
    workspaceName: "Facebook",
    goals: [],
    projects: [],
    Teams: [],
    settings: [],
  },
];

const STORAGE_KEY = "workspace-expanded";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isWorkspaceCollapsed, setIsWorkspaceCollapsed] =
    useState<boolean>(false);
  const [selectedTabs, setSelectedTabs] = useLocalStorage<string[]>(
    STORAGE_KEY,
    []
  );

  const handleTabClick = (workpaceId: string) => {
    setSelectedTabs((prev) => {
      if (prev.includes(workpaceId)) {
        return prev.filter((space) => space !== workpaceId);
      } else {
        return [...prev, workpaceId];
      }
    });
  };

  // Effect to save selectedTabs to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("selectedTabs", JSON.stringify(selectedTabs));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [selectedTabs]);

  //Effect to load selectedTabs from localStorage on component mount
  useEffect(() => {
    try {
      const storedTabs = localStorage.getItem("selectedTabs");
      if (storedTabs) {
        setSelectedTabs(JSON.parse(storedTabs));
      }
    } catch (err) {
      console.error("Error loading from localStorage", err);
    }
  }, []);

  const toggleSidebar = (event: React.MouseEvent) => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleWorkspace = (workspaceId: string) => {
    setIsWorkspaceCollapsed(!isWorkspaceCollapsed);
  };

  return (
    <aside className="">
      <div
        className={cn(
          "h-screen bg-secondary relative overflow-y-auto flex flex-col gap-y-2 w-60 transform transition-all ease-in-out ",
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
          {workspaces.map((space) => {
            return (
              <div key={space._id} className="space-y-6">
                <h3
                  className={cn("font-semibold flex flex-row justify-between")}
                  onClick={() => handleTabClick(space._id)}
                >
                  {space.workspaceName}
                  {selectedTabs.includes(space._id) ? (
                    <ChevronDown />
                  ) : (
                    <ChevronUp />
                  )}
                </h3>
                {selectedTabs.includes(space._id) && (
                  <ul
                    className={cn(
                      "flex flex-col transform transition-all ease-in-out origin-top scale-0",
                      selectedTabs.includes(space._id) && "scale-100"
                    )}
                  >
                    {sideItems.map((item) => {
                      return (
                        <li
                          key={item.label}
                          className="cursor-pointer px-5 flex flex-row items-center gap-x-2 hover:bg-gray-200 p-2 hover:rounded-md"
                        >
                          {item.icon}
                          <p>{item.label}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
