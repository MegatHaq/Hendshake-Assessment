import { NextResponse } from "next/server";

export async function POST(req, res) {
	try {
		const formData = await req.formData();
		console.log(formData);
		const message = "Received!";
		return NextResponse.json({ message: message }, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}
