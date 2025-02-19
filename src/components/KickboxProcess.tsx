import React from 'react'
import CustomHeading from './common/CustomHeading'
import Description from './common/Description'

const KickboxProcess = () => {
    return (
        <div className='flex justify-center items-center xl:pt-[129px] lg:pt-24 md:pt-16 pt-12 xl:pb-[128px] lg:pb-16 pb-12'>
            <div className="container mx-auto px-4">
                <CustomHeading title="KICKBOX PROCESS" customStyles="lg:mb-[17px] mb-3" />
                <Description customStyles='lg:mb-12 md:mb-8 mb-6 !leading-[128.57%]' title='The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors.' />
                <div className="flex flex-wrap">

                </div>
            </div>
        </div>
    )
}

export default KickboxProcess
