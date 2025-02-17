import { NextResponse } from "next/server";
import { getAllPhotos } from "@/lib/image-data";

export async function GET() {
    try {
        const photos = await getAllPhotos();
        return NextResponse.json(photos);
    } catch (error) {
        return NextResponse.error();
    }
}