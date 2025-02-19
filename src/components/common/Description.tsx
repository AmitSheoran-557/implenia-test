import React from 'react';

interface DescriptionProps {
    title: string;
    customStyles?: string;
}

const Description: React.FC<DescriptionProps> = ({ title, customStyles }) => {
    return (
        <p className={`text-lightBlack font-light lg:text-[21px] md:text-lg text-base ${customStyles}`}>{title}</p>
    );
};

export default Description;