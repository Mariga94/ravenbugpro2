import React from "react";
import { Issue, columns } from "./_components/issue-columns";
import { IssueDataTable } from "./_components/issue-data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DialogIssue } from "./_components/issue-dialog";

async function getData(): Promise<Issue[]> {
  // fetch data from your API here
  return [
    {
      _id: "1",
      projectId: "111",
      projectName: "Project 1",
      issueType: "bug",
      status: "in progress",
      reporter: "james baker",
      summary: "This is a summary",
      description: "This is a description",
      priority: "highest",
      dueDate: new Date().toString(),
      assignee: "Betty Chris",
    },
    {
      _id: "1",
      projectId: "111",
      projectName: "Project 1",
      issueType: "bug",
      status: "in progress",
      reporter: "james baker",
      summary: "This is a summary",
      description: "This is a description",
      priority: "highest",
      dueDate: new Date().toString(),
      assignee: "Betty Chris",
    },
    {
      _id: "1",
      projectId: "111",
      projectName: "Project 1",
      issueType: "bug",
      status: "in progress",
      reporter: "james baker",
      summary: "This is a summary",
      description: "This is a description",
      priority: "highest",
      dueDate: new Date().toISOString(),
      assignee: "Betty Chris",
    },
  ];
}
const IssuePage = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col space-y-8 w-full">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-semibold">Issues</h2>
        <div >
          <DialogIssue />
        </div>
      </div>
      <IssueDataTable columns={columns} data={data} />
    </div>
  );
};

export default IssuePage;
