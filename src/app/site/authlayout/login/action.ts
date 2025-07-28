// src/app/login/action.ts
'use server'

import { redirect } from 'next/navigation'
import { api } from '@/services/api'
import { cookies } from 'next/headers'

export async function handleLogin(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) return

  try {
    const response = await api.post("/session", {
      email,
      password,
    })

    const token = response.data?.token
    if (!token) return
    // console.log(response.data)
    // ✅ Salva o token em cookie seguro 
    const cookieStore = await cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 dia
    })

    // ✅ Redireciona para a dashboard
    redirect('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}
