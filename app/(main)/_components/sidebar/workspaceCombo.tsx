"use client";

import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const workspacesss = [
  {
    value: "joseph workspace",
    label: "joseph workspace",
  },
  {
    value: "google workpsace",
    label: "Google workspace",
  },
];

interface workspaceType {
  _id: string;
  workspaceName: string;
}

const WorkspaceCombobox = ({ workspaces }: { workspaces: any }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState("");
 

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? workspaces.find((workspace: any) => workspace._id === value)
                ?.workspaceName
            : "Select workspace..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <Command>
          <CommandEmpty>No workspace found.</CommandEmpty>
          <CommandGroup>
            {workspaces.map((workspace:any) => (
              <CommandItem
                key={workspace._id}
                value={workspace.workspaceName}
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
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default WorkspaceCombobox;
