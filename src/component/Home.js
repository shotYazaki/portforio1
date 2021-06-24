import React from 'react'
import ReactYoutube from '../ReactYoutube';
import '../stylesheet/Home.sass'
class Home extends React.Component {
    render() {
        return(
            <div className='Youtube-video'>
               <ReactYoutube videoId = 'cGGn0u5NaPY' />
               <ReactYoutube videoId = '3OyZXO4P-Bg' />
               <ReactYoutube videoId = 'SUtR8b1KnaE' />
            </div>
        );
    }
}

export default Home;