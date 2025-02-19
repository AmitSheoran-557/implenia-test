import React from 'react'
import Header from './common/Header'
import CustomButton from './common/CustomButton'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex bg-hero-pattern flex-col bg-cover bg-center w-full relative justify-center items-center'>
            <Header />
            <div className="container mx-auto px-4">
                <div className="lg:pt-[197px] lg:pb-[168px] py-20">
                    <p className='font-bold text-shadow lg:text-[21px] relative z-10 text-lg text-start text-white xl:h-[45px]'>Shape the future of Implenia!</p>
                    <h1 className='uppercase text-shadow xl:max-w-3xl lg:max-w-2xl md:max-w-xl max-w-sm relative z-10 font-bold xl:h-[160px] xl:text-[76px] lg:text-6xl md:text-5xl text-4xl text-start text-white lg:mb-[25px] md:mb-5 mb-4'>WE ARE LOOKING FOR YOUR IDEA</h1>
                    <CustomButton title="Bring your idea to life!" customStyles="lg:max-w-[312px] hover:relative hover:z-20 md:max-w-64 max-w-44 w-full lg:h-[67px]" />
                </div>
            </div>
            <Image className='xl:max-w-[314px] pointer-events-none lg:max-w-xs animate-slide-in md:max-w-64 sm:max-w-44 max-w-36 w-full absolute left-0 lg:-bottom-16 bottom-10' src="/assets/images/png/hero-cartoon-img.png" alt="hero-cartoon-img" width={374} height={562} />
        </div>
    )
}

export default Hero
