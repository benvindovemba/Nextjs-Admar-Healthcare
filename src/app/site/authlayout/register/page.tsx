'use server';

import Link from "next/link";
import Image from "next/image";
import AuthLayout from "@/app/components/layouts/AuthLayout";
import TextLink from "@/components/ui/TextLink";
import { Field, Label, Input, Select, Checkbox, Button } from "@headlessui/react";


 const Register = () => {
  return (
    <AuthLayout>
      <form action="#" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
       
        {/******** Logo ********/}
        <Link href="/">
          <Image
            src="/admar/logo.png"
            alt="Admar Logo"
            className="h-12 w-auto"
            priority
          />
        </Link>
       
        {/******** Título ********/}
        <h1>Create your account</h1>

        {/******** Form Fields ********/}
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </Field>
        <Field>
          <Label>Full name</Label>
          <Input name="name" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" name="password" autoComplete="new-password" />
        </Field>
        <Field>
          <Label>Country</Label>
          <Select name="country">
            <option>Canada</option>
            <option>Mexico</option>
            <option>United States</option>
          </Select>
        </Field>
        <div>
          <Checkbox name="remember" />
          <Label>Get emails about product updates and news.</Label>
        </div>
        <Button type="submit" className="w-full">
          Create account
        </Button>
        <text>
          Already have an account?{' '}
          <TextLink href="#">
            <strong>Sign in</strong>
          </TextLink>
        </text>
      </form>
    </AuthLayout>
  )
}

export default Register;