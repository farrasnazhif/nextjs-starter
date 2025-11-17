import Link from "next/link";

export default function Sandbox() {
  return (
    <div className="relative py-68 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex flex-col gap-0 text-center">
          <h1 className="text-2xl font-bold ">Welcome to The Sandbox</h1>
          <p className="text-sm">These are lists of my NextJs starter.</p>
        </div>

        <ul className="flex space-x-4 font-semibold text-[var(--color-primary)]">
          <li>
            <Link href="/sandbox/button" className="flex items-center gap-2 ">
              <span>•</span>
              <p className="text-sm underline">Button</p>
            </Link>
          </li>

          <li>
            <Link href="/sandbox/dialog" className="flex items-center gap-2 ">
              <span>•</span>
              <p className="text-sm underline">Dialog</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
