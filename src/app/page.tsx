"use client";
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

	const [taskData, setTaskData] = useState<TaskInput[] | null>(null);

	useEffect(() => {
		const storedTasksData = localStorage.getItem("taskData");

		if (storedTasksData) {
			setTaskData(JSON.parse(storedTasksData));
		}
	}, []);

	const removeTask = (indexToRemove: number) => {
		const updatedTasks =
			taskData?.filter((_, index) => index !== indexToRemove) || null;

		localStorage.setItem("taskData", JSON.stringify(updatedTasks));
		setTaskData(updatedTasks);
	};

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			{taskData && <div>Number of items in task list. {taskData?.length}</div>}
			{taskData?.map(
				({ accessibility, activity, booking, price, type }, index) => {
					return (
						<div className="flex flex-col items-center" key={index}>
							<p>Activity : {activity}</p>
							<p>Price : {price}</p>
							<p>Type : {type}</p>
							<p>Booking : {booking}</p>
							<p>Accessibility : {accessibility}</p>
							<button
								className="bg-red-600 text-white p-2 rounded-md font-bold"
								onClick={() => removeTask(index)}
							>
								Delete me!
							</button>
						</div>
					);
				}
			)}
			{!taskData && <h1>No Tasks available</h1>}
			<Link href={"/addtask"}>Add tasks</Link>
		</div>
	);
}
