"use client";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AddTask() {
	type TaskInput = {
		taskName: string;
	};

	const { register, handleSubmit } = useForm<TaskInput>();

	const onSubmit: SubmitHandler<TaskInput> = (data) => console.log(data);

	return (
		<div className="flex flex-col w-screen h-screen items-center justify-center">
			<h1>Add a task!</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="text-black">
				<input defaultValue={"Task"} {...register("taskName")} />
				<input type="submit" className="bg-white" />
			</form>
			<Link href={"/"}>Home</Link>
		</div>
	);
}
