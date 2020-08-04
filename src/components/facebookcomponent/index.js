import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FbImageLibrary from 'react-fb-image-grid'
const images = ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    
    'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
    'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350',
    "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"]



function Facebook(props){
    return(

    <div>
        <div style={{backgroundColor: 'grey', }}>
            <img src='../images/profile.jpg' style={{borderRadius: '50%'}}/>
        <p style={{paddingRight: '100px'}}>{props.text}</p>
        <p style={{marginRight: '170px'}}>2h ago:</p>
        <hr/>
        </div>
       
        <FbImageLibrary images={images} size={props.size}/>
        <hr/>
        {/* <br/> */}
        
        <div style={{display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#e3e3e3'}}>
            <a href=''>Like</a>
            <a href=''>Comment</a>
            <a href=''>Share</a>
        </div>
        <hr/>
        
        {/* <br/> */}

        <div style={{width: '70%', marginLeft: '50px'}}>
            <input type={props.type} placeholder={props.placeholder} className={props.class} />
        </div>
        <br/>


    </div>

    )

}

export default Facebook;