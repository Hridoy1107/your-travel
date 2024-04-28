import { useLoaderData } from "react-router-dom";


const AllPlaces = () => {

    const places = useLoaderData();

    return (
        <>
            <div className="mt-5">
                <h1 className=" text-2xl mt-2 px-10 text-center font-medium text-teal-700">
                Travelling is a chance to explore new places, immersing yourself in different cultures and trying delicious foods. It broadens your horizons and creates memories that last a lifetime.
                </h1>
            </div>
        </>
    );
};

export default AllPlaces;