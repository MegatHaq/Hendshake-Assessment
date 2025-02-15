import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Number of items in task list.</div>
      <Link href={'/addtask'}>Add tasks</Link>
    </div>
  );
}
