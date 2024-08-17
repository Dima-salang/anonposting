import { NextResponse } from "next/server";
import { initDatabase } from "./prep";

export async function GET() {
    try {
        await initDatabase();
        return NextResponse.json({ message: 'Database initialized successfully' });
    } catch (error) {
        console.error("Error initializing database:", error);
        return NextResponse.json(
          { message: "Error initializing database", error },
          { status: 500 }
        );
    }
}