import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const entries = Object.fromEntries(formData.entries());

		console.log(entries);

		return NextResponse.json(
			{ message: "Received!", data: entries },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		);
	}
}

// IDEA ABORTED BECAUSE I FORGOT LOCAL STORAGE ONLY WORKS IN BROWSER SO NEED CLIENT
