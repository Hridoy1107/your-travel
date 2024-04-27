import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <div className="mt-10">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    freeMode={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                >
                    <SwiperSlide><img className="w-full h-[580px] rounded-2xl" src="https://i.ibb.co/B3zQr9P/2147732543.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[580px] rounded-2xl" src="https://i.ibb.co/wMkysRS/29599.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[580px] rounded-2xl" src="https://i.ibb.co/RPDW2sV/28417.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[580px] rounded-2xl" src="https://i.ibb.co/kqpBdNT/1356.jpg" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Home;