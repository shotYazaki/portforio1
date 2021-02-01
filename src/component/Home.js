import React from 'react'
import ReactYoutube from '../ReactYoutube';
import Button from './Button';


function Home () {
    return (
        <div className='Youtube-video'>
            <Button />
            <ReactYoutube videoId = 'vlDzYIIOYmM' />
            <ReactYoutube videoId = 'Ks71YWIDEuM' />
            <ReactYoutube videoId = 'Jqf9haCd6mM' />
        </div>
    );
}

export default Home;