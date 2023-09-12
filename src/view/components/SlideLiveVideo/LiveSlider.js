import React from 'react';
import styled from 'styled-components';
import LiveVideoContent from "./LiveVideoContent";
import {SwiperSlide, Swiper} from "swiper/react";

//style
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {EffectCreative} from 'swiper/modules';

const LiveSlider = ({LiveStreamsList}) => {

    return (
        <Container>
            {LiveStreamsList ?
                <Swiper
                    className='swiper-container'
                    grabCursor={true}
                    effect={'creative'}
                    loop={true}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ['-120%', 0, -600],
                        },
                        next: {
                            shadow: true,
                            translate: ['120%', 0, -600],
                        },
                    }}
                    modules={[EffectCreative]}
                >
                    {
                        LiveStreamsList.data.map((item, index) =>
                            <SwiperSlide key={index} className={"swiper-slide"}>
                                <LiveVideoContent {...item}/>
                            </SwiperSlide>)

                    }
                </Swiper>
            : ''}
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 30px;
  

  .swiper-container {
    max-width: 1400px;
    width: 100%;
    box-shadow: 0 1px 10px 6px rgba(0, 0, 0, 0.04);
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    height: 300px;
  }

`;


export default LiveSlider;