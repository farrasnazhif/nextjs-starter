import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="relative py-68 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-2xl font-bold">Dialog Sandbox</h1>
        <div className="space-x-4">
          <Dialog>
            <DialogTrigger>
              <Button>Open Dialog</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>Welcome!</DialogTitle>
              <DialogDescription>
                This dialog is using Radix Primitives.
              </DialogDescription>

              <div className="mt-4">
                <Button>Confirm</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Link href="/sandbox">
          <p className="text-sm underline">Back to sandbox list</p>
        </Link>
      </div>
    </div>
  );
}
