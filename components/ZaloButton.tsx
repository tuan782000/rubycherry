import React from 'react';

const ZaloButton: React.FC = () => {
    return (
        <a
            href='http://zalo.me/0778748901'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat Zalo'
            className='zalo-float'
        >
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg'
                alt='Zalo'
                className='w-8 h-8'
            />
        </a>
    );
};

export default ZaloButton;
