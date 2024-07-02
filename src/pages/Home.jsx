import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'
import HomePlaces from './HomePlaces';

const Home = () => {

    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);

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
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/Fz1MVwC/Tourist-Attractions-In-Southeast-Asia-Temples-Bagan.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/7yTDmVd/R-6.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/PDQS7f8/R-7.jpg" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/9VpHdNf/R-8.jpg" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="mt-5">
                <h1 className="animate__animated animate__zoomInDown animate__repeat-1 text-5xl font-bold text-emerald-500
            animate-text">Your Travel</h1>
                <h1 className=" text-2xl mt-2 px-10 text-center font-medium text-rose-800">
                    The call of adventure whispers on the wind. Here at <span className="font-bold text-emerald-400">Your Travel</span>, we believe travel isn't just a vacation, it's a chance to broaden your horizons and collect memories that last a lifetime.  Explore our curated destinations and embark on unforgettable journeys that will enrich your soul and leave you yearning for more.
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 animate__animated animate__fadeInUp">
                {
                    places.map(place => <HomePlaces key={place.id} place={place}></HomePlaces>)
                }
            </div>
        </>
    );
};

export default Home;