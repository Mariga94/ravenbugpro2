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

const organisations = [
  {
    value: "facebook",
    label: "FaceBook",
  },
  {
    value: "google",
    label: "Google",
  },
];

const OrgCombobox = () => {
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
            ? organisations.find((organisation) => organisation.value === value)
                ?.label
            : "Select organisation..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <Command>
          <CommandEmpty>No organiation found.</CommandEmpty>
          <CommandGroup>
            {organisations.map((organisation) => (
              <CommandItem
                key={organisation.label}
                value={organisation.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === organisation.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {organisation.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default OrgCombobox;
