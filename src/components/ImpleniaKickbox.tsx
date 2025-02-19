import React from 'react'
import CustomHeading from './common/CustomHeading'
import Description from './common/Description'
import { KICKBOX_DATA_LIST } from '@/utils/helper'
import CustomButton from './common/CustomButton'

const ImpleniaKickbox = () => {
    return (
        <div className='flex justify-center items-center xl:pt-[134px] lg:pt-24 md:pt-16 pt-12 xl:pb-[128px] lg:pb-16 pb-12'>
            <div className="container mx-auto px-4">
                <CustomHeading title="Implenia kickbox" customStyles="lg:mb-4 mb-3" />
                <Description customStyles='lg:mb-8 mb-7 !leading-[128.57%]' title='Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!' />
                <div className="flex flex-wrap">
                    <div className="lg:w-8/12 w-full flex max-lg:flex-wrap items-center max-lg:justify-center lg:gap-[71px] md:gap-16 sm:gap-12 gap-8">
                        {KICKBOX_DATA_LIST.map((item, index) => (
                            <div className="max-w-max max-lg:text-center" key={index} >
                                <p className="!leading-[125.73%] xl:text-[80px] lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-yellow">{item.number}</p>
                                <p className="text-lightBlack font-bold xl:text-[21px] md:text-lg sm:text-base text-sm">{item.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-4/12 w-full flex justify-center lg:pt-0 pt-7 items-center">
                        <CustomButton customStyles='!text-red !border-red xl:max-w-[268px] max-w-[240px] max-lg:!py-2 w-full xl:h-[56px]' title='Submit your idea!' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImpleniaKickbox
