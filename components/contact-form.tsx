"use client"

import React, { useState } from 'react'

import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Check } from 'lucide-react'

const ContactForm = () => {
  const [successForm, setSuccessForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isBtnDisable, setIsBtnDisable] = useState(false)

  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      message:""
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    setIsBtnDisable(true)
   const response = await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify(values)
   })

   if(response.status === 200){
      setSuccessForm(true);
      setIsLoading(false)
      setTimeout(() => {
        setIsBtnDisable(false)
        setSuccessForm(false)
        form.reset()
      }, 3000);
   }else {
      setIsBtnDisable(false)
   }
  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nombre"
                    {...field}
                    className="dark:bg-slate-800"
                    />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="dark:bg-slate-800"
                    />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({field})=> (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Escribe tu mensaje"
                    {...field}
                    className="dark:bg-slate-800"
                    />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <div>
            {successForm 
            && (
               <div className="flex items-center">
                <span>Formulario enviado con éxito</span>
                <Check className="text-green-500 ml-2" />
              </div>
            )}
            </div>
            <Button
              type="submit"
              disabled={isBtnDisable}
              className="w-full md:w-auto min-w-[100px]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  <span>Enviando...</span>
                </div>
              ) : (
                "Enviar"
              )}
            </Button>
          </div>
        </form>
      </Form>
  )
}

export default ContactForm
 