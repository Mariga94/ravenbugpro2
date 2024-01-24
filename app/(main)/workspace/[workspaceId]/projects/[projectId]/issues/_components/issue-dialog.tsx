import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { IssueForm } from "./issue-form";

export function DialogIssue() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="flex flex-row ">
          <Plus />
          Issue
        </Button>
      </DialogTrigger>
      <DialogContent className="my-10 pb-10 h-[800px] sm:max-w-[425px] w-[900px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Issue</DialogTitle>
          <DialogDescription>
            Create new Issue. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <IssueForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
