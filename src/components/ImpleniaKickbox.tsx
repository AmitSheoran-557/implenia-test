import React from 'react'
import CustomHeading from './common/CustomHeading'
import Description from './common/Description'
import { KICKBOX_DATA_LIST } from '@/utils/helper'
import CustomButton from './common/CustomButton'

const ImpleniaKickbox = () => {
    return (
        <div id='community' className='flex justify-center items-center xl:pt-[129px] lg:pt-24 md:pt-16 pt-12 xl:pb-[134px] lg:pb-16 pb-12'>
            <div className="container mx-auto px-4">
                <CustomHeading title="Implenia kickbox" customStyles="lg:mb-4 mb-3 flex flex-col max-lg:text-center justify-center xl:h-[62px]" />
                <Description customStyles='lg:mb-5 mb-4 !leading-[128.57%] xl:h-[108px] max-lg:text-center' title='Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!' />
                <div className="flex flex-wrap">
                    <div className="lg:w-8/12 w-full flex max-lg:flex-wrap lg:pt-0 pt-4  items-center max-lg:justify-center lg:gap-[71px] md:gap-16 sm:gap-12 gap-8">
                        {KICKBOX_DATA_LIST.map((item, index) => (
                            <div className="max-w-max max-lg:text-center" key={index} >
                                <p className="xl:text-[80px] lg:text-6xl max-sm:min-w-56 md:text-5xl sm:text-4xl text-3xl text-lightYellow">{item.number}</p>
                                <p className="text-black font-bold lg:ps-1 xl:text-[21px] xl:mt-0.5 xl:pb-2 md:text-lg sm:text-base text-sm">{item.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-4/12 w-full flex justify-center lg:pt-0 pt-8 items-center">
                        <CustomButton btnTitle='Submit your idea' customStyles='!text-red hover:!text-white hover:!bg-red !border-red xl:max-w-[268px] max-w-[240px] max-lg:!py-2 w-full xl:h-[56px]' title='Submit your idea!' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImpleniaKickbox
