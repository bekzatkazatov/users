import React, {useState} from 'react';

// https://swiperjs.com/demos/images/nature-1.jpg
//     https://swiperjs.com/demos/images/nature-2.jpg
//         https://swiperjs.com/demos/images/nature-3.jpg
//             https://swiperjs.com/demos/images/nature-4.jpg


const Gallery = () => {
    const [pickedimg, setPickedimg] = useState(imgs[0])

    const getIndex = () => {
        return  imgs.indexOf(pickedimg)
    }
    const prev = () => {
        setPickedimg(imgs[getIndex() - 1])
    }

    const next = () => {
        setPickedimg(imgs[getIndex() + 1])
    }

    return (
        <div style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                height: '395px'
            }}>
                <div>
                    <button className={'buttonPrev'} disabled={imgs.indexOf(pickedimg) === 0}  onClick={prev}> ❮ </button>
                    <button className={'buttonNext'} disabled={imgs.indexOf(pickedimg) === imgs.length - 1} onClick={next}>❯ </button>
                </div>
                <img          width={'600px'} height={'350px'} src={pickedimg.src} alt=""/>

            </div>
            <div style={{display: 'flex', textAlign: 'center'}}>
                {
                    imgs.map(el =>
                        <div style={{border: '1px solid', marginBottom: '20px'}} key={el.id}
                             onClick={() => setPickedimg(el)}>
                            <img width={'148px'} height={'110px'} src={el.src} alt=""/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};


const imgs = [
    {
        id: '1',
        src: 'https://swiperjs.com/demos/images/nature-1.jpg'
    },
    {
        id: '2',
        src: 'https://swiperjs.com/demos/images/nature-2.jpg'
    },
    {
        id: '3',
        src: 'https://swiperjs.com/demos/images/nature-3.jpg'
    },
    {
        id: '4',
        src: 'https://swiperjs.com/demos/images/nature-4.jpg'
    }
]
export default Gallery;