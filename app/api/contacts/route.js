import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma = new PrismaClient()
export async function GET() {
    const contacts = await prisma.contact.findMany()
    return new NextResponse(JSON.stringify(contacts), { status: 200 })
}

export async function POST(req) {
    const body = await req.json()
    const contact = await prisma.contact.create({
        data: body
    })
    return new NextResponse(JSON.stringify(contact), { status: 200 })
}