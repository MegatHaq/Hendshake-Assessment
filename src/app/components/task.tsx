import { TaskInput } from "../lib/types";

export const TaskDisplay = ({activity,price,type,booking,accessibility} : TaskInput) => {
	return (
		<div className="flex flex-col py-2 px-4 bg-gray-700 rounded-md">
			<p>Activity : {activity}</p>
			<p>Price : {price}</p>
			<p>Type : {type}</p>
			<p>Booking : {booking}</p>
			<p>Accessibility : {accessibility}</p>
		</div>
	);
};
