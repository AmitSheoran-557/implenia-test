"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import CustomHeading from './common/CustomHeading'

const HowItWorks = () => {
    const [video, setVideo] = useState(false)

    return (
        <div className="bg-gray lg:pt-32 lg:pb-36 md:py-20 sm:py-16 py-12">
            <div className='mx-auto max-w-[1123px] px-4'>
                <CustomHeading customStyles='xl:mb-16 lg:mb-12 md:mb-7 mb-4 xl:h-[61px] justify-center flex flex-col' title='HOW IT WORKS' />
                <div className={`w-full max-h-[580px] lg:justify-end flex relative ${video ? 'hidden' : ''}`}>
                    <div className="relative">
                        <Image height={580} width={1064} src="/assets/images/webp/welcome-img.webp" alt="welcome img" onClick={() => setVideo(true)} />
                        <div className="bg-yellow py-2.5 xl:h-[144px] w-full md:max-w-[372px] max-w-[200px] absolute sm:top-6 sm:left-7 top-1 left-1 ">
                            <p className='lg:text-[21px] md:text-sm sm:text-xs text-[7px] font-bold text-center lg:pt-3'>VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.</p>
                            <p className='lg:text-[21px] md:text-sm sm:text-xs text-[7px] font-bold text-center md:pt-5'>-Titel: Name of Campaign</p>
                            <p className='lg:text-[21px] md:text-sm sm:text-xs text-[7px] font-bold text-center'>-Button: Join the campaign!</p>
                        </div>
                    </div>
                </div>
                {video && (
                    <div className="w-full max-h-[580px] lg:h-[580px] md:h-96 sm:h-72  rounded-3xl overflow-hidden relative">
                        <ReactPlayer controls width="100%" height="100%" url="https://youtu.be/r-ozeuKLZAY?si=qLphrwS2GxzMtkkV" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HowItWorks