import React from 'react';
import styled from 'styled-components';
import LiveVideoContent from "./LiveVideoContent";
import {SwiperSlide, Swiper} from "swiper/react";

//style
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import {EffectCreative, Navigation} from 'swiper/modules';

const LiveSlider = ({LiveStreamsList}) => {

    console.log(LiveStreamsList)

    return (
        <Container>
            {LiveStreamsList ?
                <Swiper
                    className='swiper-container'
                    grabCursor={true}
                    effect={'creative'}
                    navigation={true}
                    loop={true}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ['-120%', 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ['120%', 0, -500],
                        }
                    }}
                    modules={[EffectCreative, Navigation]}
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
    max-width: 800px;
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;


export default LiveSlider;