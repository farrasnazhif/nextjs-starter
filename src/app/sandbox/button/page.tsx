import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ButtonSandboxPage() {
  return (
    <div className="relative py-68 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-2xl font-bold">Button Sandbox</h1>
        <div className="space-x-4">
          <Button variant="solid">Solid</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>

          <Button variant="solid" size="sm">
            Small
          </Button>
          <Button variant="solid" size="lg">
            Large
          </Button>
        </div>
        <Link href="/sandbox">
          <p className="text-sm underline">Back to sandbox list</p>
        </Link>
      </div>
    </div>
  );
}
