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
			<div className="flex flex-col gap-2">
				{taskData?.map(
					({ accessibility, activity, booking, price, type }, index) => {
						return (
							<div className="flex items-center gap-4" key={index}>
								<div className="flex flex-col py-2 px-4 bg-gray-700 rounded-md">
									<p>Activity : {activity}</p>
									<p>Price : {price}</p>
									<p>Type : {type}</p>
									<p>Booking : {booking}</p>
									<p>Accessibility : {accessibility}</p>
								</div>
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
			</div>
			{!taskData || taskData.length == 0 && <h1>No Tasks available</h1>}
			<Link href={"/addtask"} className="underline mt-12">
				Add tasks
			</Link>
		</div>
	);
}
