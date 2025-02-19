import React from 'react';
interface Props {
    title: string;
    customStyles?: string;
}

const CustomButton: React.FC<Props> = ({ title, customStyles }) => {
    return (
        <button className={`border-2 border-white text-white font-bold lg:text-[21px] text-lg py-[11px] px-[22px] rounded-full ${customStyles}`}>
            {title}
        </button>
    );
};

export default CustomButton;