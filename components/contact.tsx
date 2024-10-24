import React from 'react'
import Title from './shared/title'
import { dataContact } from '@/data'
import ContactForm from './contact-form'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='p-6 md:px-12 md:py:16 max-w-5xl mx-auto' id="contact">
      <Title title="Contacto" subtitle="Ponte en contacto conmigo"/>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8'>
        <div>
          {dataContact.map((data)=>(
            <div key={data.id} className='flex flex-col items-center border border-gray-300 dark:bg-slate-800 rounded-lg mb-5 p-4'>
              <Link className='mb-2' href={data.link} target='_blank'>{data.icon}</Link>
              <p>{data.subtitle}</p>
            </div>
          ))}
        </div>
        <div className='col-span-2'>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact
