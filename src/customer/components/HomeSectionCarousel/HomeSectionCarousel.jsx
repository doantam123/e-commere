import React, { useState, useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({data,sectionName}) => {
    const carouselRef = useRef(null);
    const responsive = {
        0: {
            items: 1
        },
        568: {
            items: 3
        },
        1024: {
            items: 5.5,
        },
    };

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />)

    const slidePrev = () => carouselRef.current.slidePrev();
    const slideNext = () => carouselRef.current.slideNext();

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-3'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                />
                <Button variant="contained" className="z-50 bg-white"
                    onClick={slideNext}
                    sx={{
                        position: 'absolute', top: "10rem",
                        right: '0rem', transform: 'translateX(40%) rotate(-90deg)', bgcolor: 'white'
                    }}
                    aria-label='next'>
                    <ArrowLeftRoundedIcon sx={{ transform: 'rotate(-90deg)', color:'black'}} />
                </Button>
                <Button className="z-50 bg-white"
                    onClick={slidePrev}
                    variant="contained"
                    sx={{
                        position: 'absolute', top: '10rem',
                        left: '0rem', transform: 'translateX(-55%) rotate(90deg)', bgcolor: 'white'
                    }}
                    aria-label='previous'>
                    <ArrowRightRoundedIcon sx={{ transform: 'rotate(90deg)', color:'black' }} />
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarousel
