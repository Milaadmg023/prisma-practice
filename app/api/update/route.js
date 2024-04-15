import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function PUT (req) {
    const body = await req.json();
    const contact = await prisma.contact.update({
        where: { id: body.id },
        data: body
    });
    return new NextResponse(JSON.stringify(contact), { status: 200 });
}