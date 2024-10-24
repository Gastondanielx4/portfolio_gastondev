import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Paperclip } from 'lucide-react'

import { buttonVariants } from './ui/button'

import Container from './shared/container'

const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id='home'>
        <h3 className="text-xl mb-3">Hola, soy </h3>
        <h1 className='text-4xl font-bold - mb-3'>Gaston D. Quattrocchi </h1>
        <h2 className='text-2xl text-gray-400'>Desarrollador Web Frontend</h2>
        <div className='flex items-center pb-12'>
          <div className='flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto'>
            <Link className={buttonVariants()} href="#contact">
              <Mail className='mr-2' /> Contacta conmigo
            </Link>
            <Link className={buttonVariants({variant: 'secondary'})} href="/Quattrocchi_Gaston_Dev.pdf" target="_blank">
              <Paperclip className='mr-2'/>  Descargar CV   
            </Link>
          </div>
        </div>
        <Image src="/profile.png" alt="Profile pic" width={500} height={500}/>
      </div>
    </Container>
  )
}

export default Introduction
