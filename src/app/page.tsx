"use client"
import Link from "next/link";

export default function Home() {

  const storedTasksData = localStorage.getItem("taskData")

  if(storedTasksData)
  {
    const parsedData = JSON.parse(storedTasksData)
    console.log("HI",parsedData)
  }

	return (
		<div>
			<div>Number of items in task list.</div>
			<Link href={"/addtask"}>Add tasks</Link>
		</div>
	);
}
