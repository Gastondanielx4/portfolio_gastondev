import React from 'react'

import { dataAboutMe, dataSlider } from '@/data'

import Title from './shared/title'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'

function AboutMe() {
  return (
    <div className='p-6 md:px-12 md:py-16 max-w-7xl mx-auto' id='about-me'>
      <Title title="Sobre mi" subtitle="Conóceme"/>
      <div className="grid md:grid-cols-2">
        <div className='py-12 md:py0 flex items-center justify-center'>
          {/* CAROUSEL */}
          <Carousel 
          opts={{align: "start"}}
          orientation="vertical"
          className='w-full max-w-xs h-fit'
          >
            <CarouselContent className='-mt-1 h-[200px]'>
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className='flex items-center justify-center'>
                    <Image
                    src={data.url} 
                    alt="Image" 
                    width={711}
                    height={400}
                    layout="intrinsic"
                    quality={100}
                    priority={true}
                    className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
        <div className="grid md:grid-cols-3 mt-7 gap-4">
          {dataAboutMe.map((data)=> (
            <div key={data.id} className='border border-white-10 rounded-xl p-4 dark:bg-slate-800'>
              {data.icon}
              <p className='my-2'>{data.name}</p>
              <p className='text-gray-400'>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
        <p className='my-8 text-justify'>Desarrollador web con 4 años de experiencia, especializado en la creación de soluciones web innovadoras y preparado para enfrentar cualquier complejidad. Mi objetivo es brindar un servicio-producto sobresaliente y eficaz; a la vez, seguir impulsando mi carrera profesional con aprendizajes y experiencias que me permitan superar mayores desafíos. Con una sólida formación y experiencia en tecnologías como Next.js, React.js, HTML, CSS y JavaScript, me esfuerzo por mantener un desarrollo constante y alcanzar la excelencia en cada proyecto.</p>
    </div>
  )
}

export default AboutMe
