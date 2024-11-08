import React from 'react';

const TextPost = ({ children }: { children: React.ReactNode }) => {
    return <p className="py-4 text-base xl:text-xl leading-10">{children}</p>;
};

export default TextPost;
