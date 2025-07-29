'use server'

import { z } from 'zod'
//import prisma from '../../../../../backend/src/prisma' // Ajuste o caminho conforme seu projeto
// import { sendEmail } from '@/lib/email' // opcional, se quiser enviar por email

const ContactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  subject: z.string().min(2, 'Assunto é obrigatório'),
  message: z.string().min(5, 'Mensagem deve ter no mínimo 5 caracteres'),
})

export async function sendContactMessage(_: any, formData: FormData) {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  const parsed = ContactSchema.safeParse(raw)

  if (!parsed.success) {
    const errorMessage = parsed.error.issues[0]?.message || 'Dados inválidos'
    return { success: false, error: errorMessage }
  }

  /* const { name, email, subject, message } = parsed.data

  try {
    // ✅ Salvar no banco de dados
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    })
 */
    // ✅ (Opcional) Enviar e-mail
    // await sendEmail({ to: 'admin@seusite.com', subject, body: message })

  //   return { success: true, message: 'Mensagem enviada com sucesso!' }
  // } catch (error) {
    // console.error('Erro ao salvar a mensagem:', error)
    // return { success: false, error: 'Erro ao enviar mensagem. Tente novamente.' }
  //}
}
