'use client'
import React, { useEffect, useState } from 'react'
import { Benefits, Footer, Hero, Loading, Outline, Testimonials } from '../../components'

const Home = () => {
    const [load, setLoad] = useState(true)

    useEffect(() => {

        const intervalId = setInterval(() => {
            setLoad(false)
        }, 2500)

        return () => clearInterval(intervalId)

    }, [])
    return (
        <>
            {
                load ? <Loading />
                    :
                    <main>
                        <Hero />
                        <Benefits />
                        <Outline />
                        <Testimonials />
                        <Footer />
                    </main>
            }
        </>
    )
}

export default Home