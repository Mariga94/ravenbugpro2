import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { ProjecForm } from "./project-form";

export function DialogProject() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex flex-row ">
          <Plus />
          Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
          <DialogDescription>
            Create new project. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ProjecForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
