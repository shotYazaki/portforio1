import React from 'react'
import ReactYoutube from '../ReactYoutube';
import Button from './Button';


class Home extends React.Component() {
    render() {
        return(
            <div className='Youtube-video'>
               <Button />
               <ReactYoutube videoId = 'vlDzYIIOYmM' />
               <ReactYoutube videoId = 'Ks71YWIDEuM' />
               <ReactYoutube videoId = 'Jqf9haCd6mM' />
            </div>
        );
    }
}

export default Home;