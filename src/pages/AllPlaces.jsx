import { useLoaderData } from "react-router-dom";
import PlaceCard from "./PlaceCard";
import { Slide } from "react-awesome-reveal";

const AllPlaces = () => {

    const places = useLoaderData();

    return (
        <>
        {
            places? (
                <>
            <div className="mt-5">
                <Slide triggerOnce>
                    <p className=" text-2xl mt-2 px-10 text-center font-medium text-teal-700">
                        Travelling is a chance to explore new places, immersing yourself in different cultures and trying delicious foods. It broadens your horizons and creates memories that last a lifetime.
                    </p>
                </Slide>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 animate__animated animate__fadeInUp">
                {
                    places.map(place1 => <PlaceCard key={place1._id} place1={place1}></PlaceCard>)
                }
            </div>
        </>
            ) :
            (<span className="loading loading-spinner loading-lg"></span>)
        }
        
        </>
    );
};

export default AllPlaces;