import React from 'react'
import Header from './common/Header'
import CustomButton from './common/CustomButton'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex bg-hero-pattern flex-col bg-cover bg-center w-full justify-center items-center'>
            <Header />
            <div className="container mx-auto px-4">
                <div className="pt-[197px] pb-[168px]">
                    <p className='font-bold text-shadow lg:text-[21px] relative z-10 text-lg text-start text-white'>Shape the future of Implenia!</p>
                    <h1 className='uppercase text-shadow max-w-[700px] relative z-10 font-bold xl:text-[76px] lg:text-6xl md:text-5xl text-4xl text-start text-white lg:mb-[25px] md:mb-5 mb-4'>WE ARE LOOKING FOR YOUR IDEA</h1>
                    <CustomButton title="Bring your idea to life!" customStyles="lg:max-w-[312px] max-xl:relative z-10 max-w-[250px] w-full lg:h-[67px]" />
                </div>
            </div>
            <Image className='xl:max-w-[374px] lg:max-w-xs animate-slide-in max-w-[250px] w-full absolute left-0 lg:bottom-0 bottom-10' src="/assets/images/png/hero-cartoon-img.png" alt="hero-cartoon-img" width={374} height={562} />
        </div>
    )
}

export default Hero
