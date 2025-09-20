import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  createdAt: string
}

// In-memory storage (replace with actual database in production)
const contacts: ContactFormData[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Create contact entry
    const contact: ContactFormData = {
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      company: body.company || "",
      subject: body.subject,
      message: body.message,
      createdAt: new Date().toISOString(),
    }

    // Save to database (using in-memory for demo)
    contacts.push(contact)

    // Log for debugging
    console.log("New contact submission:", contact)
    console.log("Total contacts:", contacts.length)

    return NextResponse.json({ message: "Contato salvo com sucesso!", id: contacts.length }, { status: 201 })
  } catch (error) {
    console.error("Error saving contact:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    contacts: contacts,
    total: contacts.length,
  })
}
