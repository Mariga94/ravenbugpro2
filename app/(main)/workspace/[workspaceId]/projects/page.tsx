import React from "react";
import { ProjectType, columns } from "./_components/project-columns";
import { DialogProject } from "./_components/project-dialog";
import DataTable from "./_components/project-data-table";

async function getData(): Promise<ProjectType[]> {
  // Fetch data from your API here
  return [
    {
      id: "1",
      name: "project 1",
      owner: "John Doe",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    },
    {
      id: "2",
      name: "project 2",
      owner: "Jane Doe",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    },
  ];
}

const ProjectPage = async () => {
  const data = await getData();
 
  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-semibold">Projects</h2>
          <div>
            <DialogProject />
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default ProjectPage;
