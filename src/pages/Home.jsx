import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <>
            <div className="mt-5">
                <h1 className=" text-4xl text-emerald-600">
                    <span style={{ color: 'emerald', fontWeight: 'semibold' }}>
                        <Typewriter
                            words={['Collect Moments, Not Things']}
                            loop={50}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <h1 className=" text-2xl mt-1 px-10 text-center font-medium text-sky-600">
                    The world beckons with hidden wonders and unforgettable experiences.  Travel is more than just sightseeing; it's a chance to broaden your horizons and collect memories that last a lifetime.  Embark on an adventure, discover new cultures, and lose yourself in the beauty our planet has to offer.
                </h1>
            </div>
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
                    <SwiperSlide><img className="w-full h-[600px] rounded-2xl" src="https://i.ibb.co/B3zQr9P/2147732543.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[600px] rounded-2xl" src="https://i.ibb.co/wMkysRS/29599.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[600px] rounded-2xl" src="https://i.ibb.co/RPDW2sV/28417.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[600px] rounded-2xl" src="https://i.ibb.co/kqpBdNT/1356.jpg" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="mt-5">
                <h1 className="animate__animated animate__zoomInDown animate__repeat-1 text-5xl font-bold text-emerald-500
            animate-text">Your Travel</h1>
                <h1 className=" text-2xl mt-2 px-10 text-center font-medium text-rose-800">
                    The call of adventure whispers on the wind. Here at <span className="font-bold text-emerald-400">Your Travel</span>, we believe travel isn't just a vacation, it's a chance to broaden your horizons and collect memories that last a lifetime.  Explore our curated destinations and embark on unforgettable journeys that will enrich your soul and leave you yearning for more.
                </h1>
            </div>
            
        </>
    );
};

export default Home;