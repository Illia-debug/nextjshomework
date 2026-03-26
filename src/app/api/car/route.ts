import {carSchema} from "@/lib/schema";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const result = carSchema.safeParse(body);
    if (!result.success) {
        return NextResponse.json({errors: result.error.flatten()});
    }
    return NextResponse.json({
        message: 'ok',
        data: result.data,
    });
}