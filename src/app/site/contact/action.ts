'use server'

import { z } from 'zod'

// Esquema de validação Zod
const ContactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  subject: z.string().min(2, 'Assunto é obrigatório'),
  message: z.string().min(5, 'Mensagem deve ter no mínimo 5 caracteres'),
})

// Tipo de retorno da action
type ContactResponse = {
  success: boolean
  message: string
  error: string
}

// Server Action
export async function sendContactMessage(_: any, formData: FormData): Promise<ContactResponse> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  const parsed = ContactSchema.safeParse(raw)

  if (!parsed.success) {
    const errorMessage = parsed.error.issues[0]?.message || 'Dados inválidos'
    return {
      success: false,
      message: '',
      error: errorMessage,
    }
  }

  const { name, email, subject, message } = parsed.data

  try {
    // ✅ Salvar no banco (descomente se tiver prisma configurado)
    // await prisma.contactMessage.create({
    //   data: { name, email, subject, message },
    // })

    // ✅ (Opcional) Enviar e-mail
    // await sendEmail({ to: 'admin@seusite.com', subject, body: message })

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!',
      error: '',
    }
  } catch (error) {
    console.error('Erro ao processar a mensagem:', error)
    return {
      success: false,
      message: '',
      error: 'Erro ao enviar mensagem. Tente novamente.',
    }
  }
}
