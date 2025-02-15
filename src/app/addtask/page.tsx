"use client";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AddTask() {
	type TaskInput = {
		activity: string;
		price: number;
		type: string;
		booking: boolean;
		accessibility: number;
	};

	const typeOptions: string[] = [
		"education",
		"recreational",
		"social",
		"diy",
		"charity",
		"cooking",
		"relaxation",
		"music",
		"busywork",
	];
        
	const { register, handleSubmit } = useForm<TaskInput>();

	const onSubmit: SubmitHandler<TaskInput> = async (data) => {
		data.accessibility = data.accessibility / 100;

		const formData = new FormData();
		formData.append("input", data);

		const response = await fetch("/api/addtask", {
			method: "POST",
			body: formData,
		});

		console.log(response.json());
	};

	return (
		<div className="flex flex-col w-screen h-screen items-center justify-center">
			<h1>Add a task!</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="text-black">
				{/* <input defaultValue={"Activity"} {...register("activity")} />
				<input type="submit" className="bg-white" /> */}
				<div className="flex flex-col">
					<label className="text-white text-left">Activity</label>
					<input {...register("activity")} />
				</div>
				<div className="flex flex-col">
					<label className="text-white text-left">Price</label>
					<input type="number" {...register("price")} />
				</div>
				<div className="flex flex-col text-white">
					<label className="text-white text-left">Type</label>
					{typeOptions.map((item) => {
						return (
							<div className="flex">
								{item}
								<input type="radio" value={item} {...register("type")} />
							</div>
						);
					})}
				</div>
				<div className="flex flex-col">
					<label className="text-white text-left">Booking required</label>
					<input type="checkbox" {...register("booking")} />
				</div>
				<div className="flex flex-col">
					<label className="text-white text-left">Accessibility</label>
					<input type="range" {...register("accessibility")} />
				</div>
				<input type="submit" className="bg-white" />
			</form>
			<Link href={"/"}>Home</Link>
		</div>
	);
}
