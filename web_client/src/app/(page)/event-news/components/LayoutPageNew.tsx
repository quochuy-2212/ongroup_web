import React from 'react';
import PostNew from './PostNew';
import PostAll from './PostAll';
import Pagination from './Pagination';

const LayoutPageNew = () => {
    return (
        <div className="container m-auto space-y-10">
            <PostNew />
            <PostAll />
            <Pagination />
        </div>
    );
};

export default LayoutPageNew;
