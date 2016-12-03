import React from 'react';

const Banner = ({ appName }) => {
    return (
        <div>
            <div className='banner twelve columns center'>
                <h1>{appName.toUpperCase()}</h1>
                <p>A place to share knowledge</p>
                < hr/>
            </div>
        </div>
    );
}

export default Banner; 