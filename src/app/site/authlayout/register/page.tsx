'use server';

import Link from "next/link";
import Image from "next/image";
import AuthLayout from "../../components/layouts/AuthLayout";


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
        <CheckboxField>
          <Checkbox name="remember" />
          <Label>Get emails about product updates and news.</Label>
        </CheckboxField>
        <Button type="submit" className="w-full">
          Create account
        </Button>
        <Text>
          Already have an account?{' '}
          <TextLink href="#">
            <Strong>Sign in</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  )
}

export default Register;