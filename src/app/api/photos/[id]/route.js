import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/image-data";

export async function GET(request, { params }) {
    try {
        const photoID = params?.id;
        const data = await getPhotoById(photoID);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}