import React from 'react';
import {Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


function BackButton(  { destination = "/" }   ) {

    return (
        <>
            <Link  to = {destination}>
                <BsArrowLeft className='text-4xl font-extrabold cursor-pointer' />
            </Link>
        </>
    )
}

export default BackButton;