import React from 'react';
import styled from 'styled-components';
import LiveVideoContent from "./LiveVideoContent";
import {SwiperSlide, Swiper} from "swiper/react";

//style
import 'swiper/css';


// init Swiper:
// const swiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination],
// })

const LiveSlider = ({LiveStreamsList}) => {

    return (
        <Container>
            <Swiper
                className='swiper-container'
                spaceBetween={50}
                slidesPerView={1}
                navigation //*
                pagination={{clickable: true}} //*
                scrollbar={{draggable: true}} //*
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {
                    LiveStreamsList.data.map((item, index) =>
                        <SwiperSlide key={index} className={"swiper-slide"}>
                            <LiveVideoContent {...item}/>
                        </SwiperSlide>)

                }
            </Swiper>

        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 30px;

  .swiper-container {
    max-width: 700px;
    height: 300px;
    box-shadow: 0 1px 10px 6px rgba(0,0,0,0.04);
  }
  
  .swiper-slide{
    display: flex;
  }

`;


export default LiveSlider;