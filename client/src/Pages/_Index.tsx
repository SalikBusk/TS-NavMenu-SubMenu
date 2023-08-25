import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Mode from '../Components/Mode'
import Preloader from '../Components/Preloader/Preloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  if(isLoading) {
    return (
      <Preloader/>
    )
  }
  return (
    <main className='bg-primary dark:bg-dark flex flex-col items-center justify-center w-full h-screen'>
        <Container>
          <section className='flex flex-col items-center justify-center w-full '>
            <Mode/>
          </section>
        </Container>
    </main>
  )
}

export default Index