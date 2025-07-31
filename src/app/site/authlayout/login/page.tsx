'use server';

import Logo from "@/../public/admar/logo.png";
import Image from "next/image";
import TextLink from "@/components/ui/TextLink";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import Link from "next/link";
import AuthLayout from "./../../../components/layouts/AuthLayout";
import { api } from "@/services/api";
import { handleLogin } from "./action";

  const Login = () => {
    return (
      <AuthLayout>
        <form action={handleLogin} className="flex flex-col items-center justify-center space-y-6 w-full max-w-sm mx-auto">
          
          {/******** Logo ********/}
          <Link href="/">
            <Image
              src={Logo}
              alt="Admar Logo"
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/******** Título ********/}
          <h1 className="text-2xl font-bold text-center text-gray-800">Entrar na sua conta</h1>

          {/******** Campo Email ********/}
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/*********** Campo Senha ***********/}
          <div className="w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/*********** Remember e Esqueci a Senha ***********/}
          <div className="flex items-center justify-between w-full text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <span>Lembrar-me</span>
            </label>
            <TextLink href="#">Esqueceu a senha?</TextLink>
          </div>

          {/*********** Botão Entrar ***********/}
          <Button type="submit" className="w-full">
            Entrar
          </Button>

          {/*********** Link para registro ***********/}
          <span className="text-sm">
            Ainda não tem conta?{' '}
            <TextLink href="/register">
              <strong>Crie uma agora</strong>
            </TextLink>
          </span>
        </form>
      </AuthLayout>
    );
  };

  export default Login;
