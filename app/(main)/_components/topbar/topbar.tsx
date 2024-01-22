import React from "react";
import { MenuSquare, PlusSquare } from "lucide-react";
import NotificationBell from "./notificationBell";
import Logo from "@/components/logo";
import ProfileAvatar from "@/components/profileAvatar";
import OrgCombobox from "../organisation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Navbar = () => {
  return (
    <div className="px-10 w-full flex flex-row justify-between items-center h-20 border-b-2">
      <div className="flex flex-row items-center justify-between gap-20">
        <Logo/>
      <Button className={cn('flex flex-row justify-between gap-x-2')}>
        Create
      </Button>
      </div>
      <div className="flex flex-row justify-between gap-x-10 items-center">
        <OrgCombobox />
        <NotificationBell notificationCount={3}/>
        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Navbar;
