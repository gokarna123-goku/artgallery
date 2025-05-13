import React from 'react'
import Hero from './hero/Hero'
import Counter from './counter/Counter'

const Home = () => {
    return (
        <div className='w-full min-h-[100dvh] space-y-14 pb-16'>
            {/* Hero section */}
            <Hero />

            {/* Counter */}
            <Counter />

        </div>
    )
}

export default Home