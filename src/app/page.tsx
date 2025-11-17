import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative py-68 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-5xl font-bold text-[var(--color-primary)]">
          NextJs Starter
        </h1>
        <p className="">by Farras Nazhif</p>
        <Link href="/sandbox">
          <Button variant="soft" className="border border-[var(--text-color)]">
            Sandbox
          </Button>
        </Link>
      </div>
    </div>
  );
}
