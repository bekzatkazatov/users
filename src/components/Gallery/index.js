import React, {useState} from 'react';

// https://swiperjs.com/demos/images/nature-1.jpg
//     https://swiperjs.com/demos/images/nature-2.jpg
//         https://swiperjs.com/demos/images/nature-3.jpg
//             https://swiperjs.com/demos/images/nature-4.jpg



const Gallery = () => {
    const [pickedimg,setPickedimg] = useState([0])

    return (
        <div style={{marginTop:'20px',
             display:'flex',
              flexDirection:'column',
              justifyContent:'center',
               alignItems:'center'}}>
            <div style={{
                height:'300px'
            }}>
                <img width={'600px'} height={'300px'} src={pickedimg.src} alt=""/>
            </div>
            <div style={{display:'flex',textAlign:'center'}}>
                {
                    imgs.map(el=>
                        <div style={{border:'1px solid',marginBottom:'20px'}} key={el.id} onClick={()=>setPickedimg(el)}>
                            <img width={'148px'} height={'110px'} src={el.src} alt=""/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};






const imgs =[
    {
        id:'1',
        src: 'https://swiperjs.com/demos/images/nature-1.jpg'
    },
    {
        id:'2',
        src: 'https://swiperjs.com/demos/images/nature-2.jpg'
    },
    {
        id:'3',
        src: 'https://swiperjs.com/demos/images/nature-3.jpg'
    },
    {
        id:'4',
        src: 'https://swiperjs.com/demos/images/nature-4.jpg'
    }
]
export default Gallery;