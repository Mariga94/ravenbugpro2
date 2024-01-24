import React from "react";
import Members from "./_components/membersTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const TeamPage = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-between">
        <div>
        <h2 className="font-semibold">Members</h2>
        <p>100 members</p>
        </div>
        <Button className="flex flex-row justify-between items-center">
          <Plus />
          Add Member
        </Button>
      </div>
      <Members />
    </div>
  );
};

export default TeamPage;
