'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

const PrivacyPolicyPage = () => {
  const [accepted, setAccepted] = useState(false)
  const router = useRouter()

  const handleAccept = () => {
    setAccepted(true)
    // Ex: salvar consentimento no localStorage, cookie ou redirecionar
    // localStorage.setItem('privacyAccepted', 'true')
    router.push('/')
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      {/* Logotipo */}
      <div className="flex items-center mb-10">
        <Image
          src="/admar/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="mr-3"
        />
        <h1 className="text-3xl font-bold text-blue-700">Política de Privacidade</h1>
      </div>

      <p className="mb-6 text-base text-gray-600">
        Esta política descreve como tratamos as suas informações pessoais. Ao utilizar este site, você concorda com os termos aqui descritos.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Coleta de Informações</h2>
          <p>
            Coletamos dados como nome, e-mail e telefone fornecidos voluntariamente por você
            ao preencher formulários ou interagir com o site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Uso das Informações</h2>
          <p>
            Utilizamos os dados para comunicação, personalização de serviços e melhoria da
            experiência do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Compartilhamento</h2>
          <p>
            Não compartilhamos suas informações com terceiros sem o seu consentimento, salvo em
            casos exigidos por lei.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger suas informações contra
            acesso não autorizado, perda ou alteração.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Cookies</h2>
          <p>
            Utilizamos cookies para analisar o tráfego do site e oferecer melhor usabilidade.
            Você pode desativá-los nas configurações do navegador.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Seus Direitos</h2>
          <p>
            Você pode acessar, corrigir ou solicitar a exclusão de seus dados pessoais. Para isso,
            entre em contato conosco.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Atualizações</h2>
          <p>
            Podemos alterar esta política a qualquer momento. A versão mais recente estará sempre
            disponível neste endereço.
          </p>
        </section>
      </div>

      {/* Botão de Aceitar */}
      <div className="mt-10 flex items-center gap-4">
        <Button
          variant='custom'
          className="bg-blue-700 text-white hover:bg-blue-800"
          onClick={handleAccept}
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Aceito os Termos
        </Button>

        {accepted && (
          <span className="text-green-600 font-medium">Obrigado por aceitar nossa política.</span>
        )}
      </div>

      <p className="text-sm text-gray-400 mt-12">
        Última atualização: 28 de Julho de 2025
      </p>
    </main>
  )
}

export default PrivacyPolicyPage
