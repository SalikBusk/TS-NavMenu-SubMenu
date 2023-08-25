import React from 'react'
import Container from '../Components/Container'
import Mode from '../Components/Mode'

const Index = () => {
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