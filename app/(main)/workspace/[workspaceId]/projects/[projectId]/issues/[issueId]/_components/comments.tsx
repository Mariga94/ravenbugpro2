import { comment } from "postcss";
import React from "react";

const comments = [
  {
    id: "1",
    user: "James Doe",
    createdAt: new Date().toString(),
    message: "This is a message",
  },
  {
    id: "2",
    user: "James Doe",
    createdAt: new Date().toString(),
    message: "This is a message",
  },
  {
    id: "3",
    user: "James Doe",
    createdAt: new Date().toString(),
    message: "This is a message",
  },
];
const Comments = () => {
  return (
    <div className=" h-full overflow-y-auto space-y-2">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="flex flex-col bg-slate-50 rounded-md p-5">
            <h4 className="font-semibold">{comment.user}</h4>
            <p>{comment.message}</p>
            <span>{comment.createdAt}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
