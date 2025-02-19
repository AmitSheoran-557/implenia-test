import React from 'react';
interface Props {
    title: string;
    customStyles?: string;
}

const CustomButton: React.FC<Props> = ({ title, customStyles }) => {
    return (
        <button className={`border-2 border-white text-white font-bold lg:text-[21px] md:text-lg text-sm hover:bg-white hover:text-red transition-all duration-300 ease-linear lg:py-[11px] py-2 lg:px-[22px] md:px-4 px-3 rounded-full ${customStyles}`}>
            {title}
        </button>
    );
};

export default CustomButton;