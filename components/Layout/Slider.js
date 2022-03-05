import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = (props) => {
  
    const {slides, spaceBetween, slidesPerView} = props
    return (
        <>
            {slides.length > 0 ? 
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={spaceBetween || 20}
                    slidesPerView={slidesPerView || 4}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                    >
                        {slides.map((slide, index) =>
                            <SwiperSlide key={index}>
                                {slide}
                            </SwiperSlide>
                        )}
                </Swiper>
            : []}
        </>
    );
};

export default Slider;