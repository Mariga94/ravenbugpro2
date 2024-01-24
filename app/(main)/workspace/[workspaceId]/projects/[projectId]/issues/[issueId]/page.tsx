import React from "react";
import { CommentForm } from "./_components/comment-form";
import Comments from "./_components/comments";
import { Separator } from "@/components/ui/separator";
const IssuePage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-y-auto">
      <div className="left lg:w-2/3 space-y-6 p-5 h-full overflow-y-auto">
        <div>
          <h2 className="font-semibold">Summary</h2>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            nulla pariatur iure voluptates consequatur amet cupiditate.
            Laudantium nemo repellendus temporibus nesciunt voluptatum
            reprehenderit, dignissimos, tempora ad impedit quisquam assumenda
            voluptatibus.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Description</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            accusantium beatae cupiditate dolor? Itaque laborum porro optio.
            Corrupti possimus vel rerum cumque architecto tenetur, veniam
            deleniti perspiciatis voluptatem quaerat totam.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold">Activity</h3>
          <CommentForm />
          <Separator />
          <Comments />
        </div>
      </div>
      <div>
        <Separator orientation="vertical" />
      </div>
      <div className="right lg:w-1/3 p-5 space-y-3">
        <h3 className="font-semibold">Details</h3>
        <div className="flex flex-row space-x-2">
          <h4 className="font-semibold">Priority</h4>
          <p>Medium</p>
        </div>
        <div className="flex flex-row space-x-2">
          <h4 className="font-semibold">Status</h4>
          <p>Todo</p>
        </div>
        <div className="flex flex-row space-x-2">
          <h4 className="font-semibold">Reporter</h4>
          <p>Jane Doe</p>
        </div>
        <div className="flex flex-row space-x-2">
          <h4 className="font-semibold">Assignee</h4>
          <p>Unassignee</p>
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
