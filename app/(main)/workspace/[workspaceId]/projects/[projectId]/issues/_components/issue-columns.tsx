"use client"
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Issue = {
  _id: string;
  projectId: string;
  projectName: string;
  issueType: "bug" | "task" | "new feature" | "improvement";
  status: "todo" | "in progress" | "in review";
  summary: string;
  description: string;
  reporter: string;
  priority: "highest" | "high" | "low" | "lowest";
  dueDate: string;
  assignee: string;
};

export const columns: ColumnDef<Issue>[] = [
  {
    accessorKey: "issueType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Issue Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
  },
  {
    accessorKey: "summary",
    header: "Summary",
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
  },
];
