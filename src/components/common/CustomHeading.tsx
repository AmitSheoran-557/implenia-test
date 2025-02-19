import React from 'react';

interface HeadingProps {
    title: string;
    customStyles?: string;
}

const CustomHeading: React.FC<HeadingProps> = ({ title, customStyles }) => {
    return (
        <p className={`text-lightBlack uppercase font-bold leading-[125.73%] lg:text-[49px] md:text-4xl text-3xl ${customStyles}`}>{title}</p>
    );
};

export default CustomHeading;