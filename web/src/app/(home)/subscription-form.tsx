'use client'

import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import{ z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { subscribeToEvent } from "@/http/api";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido')
})

type subscriptionSchema = z.infer<typeof subscriptionSchema>

export default function SubscriptionForm() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SubscriptionFormContent />
    </Suspense>
  );
}

function SubscriptionFormContent(){
  const router = useRouter()
  const searchParams = useSearchParams()

  const {register, handleSubmit, formState: {errors}} = useForm<subscriptionSchema>({
    resolver: zodResolver(subscriptionSchema)
  })

  async function onSubscribe({name, email}: subscriptionSchema){
    const referrer = searchParams.get('referrer')

    const {subscriberId} = await subscribeToEvent({ name, email, referrer })

    router.push(`/invite/${subscriberId}`)
  }

  return(
    <form onSubmit={handleSubmit(onSubscribe)} className='bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]'>
      <h2 className='font-heading font-semibold text-gray-200 text-xl'>Inscrição</h2>
         
      <div className='space-y-3'>
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User/>
            </InputIcon>

            <InputField {...register('name')} type='text' placeholder='Nome completo'/>
          </InputRoot>

          {errors.name && (
            <p className="text-danger text-xs font-semibold">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail/>
            </InputIcon>

            <InputField {...register('email')} type='Email' placeholder='Digite seu E-mail'/>
          </InputRoot>

          {errors.email && (
            <p className="text-danger text-xs font-semibold">{errors.email.message}</p>
          )}
        </div>
      </div>

      <Button type='submit'>
        Confirmar
        <ArrowRight/>
      </Button>
    </form>
  )
}