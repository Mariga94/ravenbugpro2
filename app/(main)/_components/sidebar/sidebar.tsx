"use client";
import React, { useState, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRightCircle,
  Folder,
  LineChart,
  Settings,
  Users,
  Goal,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
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
    label: "Projects",
    value: "projects",
    path: "/projects",
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
    path: "settings",
    icon: <Settings size={20} />,
  },
];

const workspaces = [
  {
    _id: "1",
    workspaceName: "SpaceX",
    goals: [],
    projects: [],
    teams: [],
    settings: [],
  },
  {
    _id: "2",
    workspaceName: "Facebook",
    goals: [],
    projects: [],
    teams: [],
    settings: [],
  },
];

interface IWorkspace {
  _id: string;
  workspaceName: string;
  goals?: string[];
  projects?: string[];
  teams?: string[];
  settings?: string[];
}
const WORKSPACE_KEY = "workspace-selected";
const Sidebar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = useLocalStorage<string>(WORKSPACE_KEY, "");
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [workspace, setWorkspace] = useState<IWorkspace | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);

  const params = useParams();
  const {workspaceId} = params;
  const pathname = usePathname();
  const urlParts = pathname.split("/");
  const manipulatedString = `/${urlParts[1]}/${workspaceId}/${urlParts[3]}`;
  console.log(manipulatedString);

  useEffect(() => {
    setIsClient(true); // Set isClient to true on the client side
  }, []);

  useEffect(() => {
    // Fetch workspace from workspaces array based on the value from local storage
    const fetchedWorkspace = workspaces.find((obj) => obj._id === value);
    if (fetchedWorkspace !== undefined) {
      setWorkspace(fetchedWorkspace);
    }
  }, [value]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={cn(
        "h-[100svh] bg-secondary relative flex flex-col gap-y-2 w-60 transform transition-all ease-in-out ",
        isCollapsed && "w-3"
      )}
    >
      <div className={cn(" h-20 flex flex-col justify-center px-5")}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                "w-[200px] justify-between ",
                isCollapsed && "hidden"
              )}
            >
              {isClient && value
                ? workspace?.workspaceName
                : "Select workspace..."}

              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="">
            <Command>
              <CommandEmpty>No workspace found.</CommandEmpty>
              <CommandGroup>
                {workspaces.map((workspace: any) => (
                  <CommandItem
                    key={workspace._id}
                    value={workspace._id}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === workspace.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {workspace.workspaceName}
                  </CommandItem>
                ))}
                <Separator />
                <CommandItem onClick={() => alert("create workspace")}>
                  Create Workspace
                </CommandItem>
                <CommandItem>Manage Workspace</CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="absolute top-5 -right-3">
        {isCollapsed ? (
          <ChevronRightCircle
            className="bg-gray-100 hover:bg-primary hover:text-white rounded-full"
            role="button"
            onClick={toggleSidebar}
          />
        ) : (
          <ChevronLeft
            className="bg-gray-100 hover:bg-primary hover:text-white rounded-full"
            role="button"
            onClick={toggleSidebar}
          />
        )}
      </div>
      <Separator />
      {workspace && (
        <div key={workspace._id} className={cn(isCollapsed && "hidden")}>
          {
            <div className={cn("flex flex-col space-y-8 px-5 ")}>
              {sideItems.map((item) => {
                return (
                  <Link
                    key={item.label}
                    href={`/workspace/${workspaceId}/${item.path}`}
                    className={cn(
                      "cursor-pointer px-5 flex flex-row items-center gap-x-2 hover:bg-gray-200 p-2 hover:rounded-md",
                      pathname === item.path && "bg-primary"
                    )}
                  >
                    {item.icon}
                    <p>{item.label}</p>
                  </Link>
                );
              })}
            </div>
          }
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
