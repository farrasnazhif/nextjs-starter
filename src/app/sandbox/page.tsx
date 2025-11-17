import Link from "next/link";

export default function Sandbox() {
  return (
    <div className="relative py-68 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex flex-col gap-0 text-center">
          <h1 className="text-3xl font-bold ">Welcome to The Sandbox</h1>
          <p className="text-md">These are the components you can use.</p>
        </div>
        <ul className="flex space-x-4 font-semibold text-[var(--color-primary)] text-lg">
          <li>
            <Link href="/sandbox/button" className="flex items-center gap-2 ">
              <span>•</span>
              <p className=" underline">Button</p>
            </Link>
          </li>

          <li>
            <Link href="/sandbox/dialog" className="flex items-center gap-2 ">
              <span>•</span>
              <p className=" underline">Dialog</p>
            </Link>
          </li>
        </ul>
        <p>tes</p>
        <h3 className="text-md ">
          You can explore and add more components in{" "}
          <Link
            href="https://www.radix-ui.com/primitives/docs/components/dialog"
            className="underline font-bold"
            target="_blank"
          >
            Radix Primitive Docs
          </Link>
        </h3>
      </div>
    </div>
  );
}
