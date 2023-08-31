import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Personal = () => {
  return (
    <section className='static flex flex-col self-center w-10/12'>
        <div className='flex flex-col items-center gap-2 p-4 pt-20 mt-20 rounded-md text-light-secondary bg-light-primary'>
        <span className='text-lg font-bold'>Alonso Ramírez Páez</span>
        <span className='px-4 py-2 text-xs rounded-lg text-light-fourth bg-light-bg'>Desarrollo Web</span>
        <span className='px-4 py-2 text-xs rounded-lg text-light-fourth bg-light-bg'>Desarrollo Móvil</span>
        <span className='self-start px-1 text-lg font-bold border-b-4 border-light-tertiary'>Sobre mí</span>
        <span className='text-sm text-justify'>
            Aunque considero tener bases sólidas en el desarrollo de proyectos significativos y desafiantes, busco siempre mejorar mis habilidades en la escritura de código eficiente y trabajo en equipo.
        </span>
        <span className='self-start px-1 text-lg font-bold border-b-4 border-light-tertiary'>Contacto</span>
        <div className='flex flex-col gap-2'>
            <div className='flex items-center h-auto gap-4 p-1'>
            <FontAwesomeIcon icon={faEnvelope} className='text-4xl text-light-tertiary' />
            <a className='text-sm underline underline-offset-1' href="mailto:alonso.rpaez@gmail.com">alonso.rpaez@gmail.com</a>
            </div>
            <div className='flex items-center h-auto gap-4 p-1'>
            <FontAwesomeIcon icon={faGithub} className='text-4xl text-light-tertiary' />
            <a className='text-sm underline underline-offset-1' href="https://github.com/alormzpaez">github.com/alormzpaez</a>
            </div>
        </div>
        </div>
        <div className='absolute z-10 self-center w-7/12 h-40 bg-center bg-no-repeat bg-cover rounded-lg drop-shadow-lg bg-me'>
          {/* image */}
        </div>
    </section>
  )
}

export default Personal