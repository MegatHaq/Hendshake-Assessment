"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	type TaskInput = {
		activity: string;
		price: number;
		type: string;
		booking: boolean;
		accessibility: number;
	};
  
  const [taskData, setTaskData] = useState<TaskInput | null>(null);

	useEffect(() => {
		const storedTasksData = localStorage.getItem("taskData");

		if (storedTasksData) {
			setTaskData(JSON.parse(storedTasksData));
		}
	}, []); 

	return (
		<div>
			<div>Number of items in task list.</div>
      <div>
        <p>Activity : {taskData?.activity}</p>
        <p>Price : {taskData?.price}</p>
        <p>Type : {taskData?.type}</p>
        <p>Booking : {taskData?.booking}</p>
        <p>Accessibility : {taskData?.accessibility}</p>
      </div>
			<Link href={"/addtask"}>Add tasks</Link>
		</div>
	);
}
