import { useLoaderData, useParams } from "react-router-dom";

const HomeDetails = () => {

    const places = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const place = places.find(place => place.id === idInt);

    return (
        <>
            <div className="w-[1216px] rounded-2xl h-[500px] mt-10 bg-slate-400">
                <div className="flex">
                    <div>
                        <img className="ml-12 my-16 absolute w-[640px] h-[350px] rounded-2xl" src={place.image} alt="" />
                    </div>
                    <div className="w-[500px] h-[300px] my-12 absolute card ml-[700px]">
                        <div className="flex my-1">
                            <div className="badge badge-accent mt-1">{place.seasonality}</div>
                            <div className=" absolute right-8">
                                <h1 className="font-medium text-black">Travel Time: <span className="text-green-800 font-semibold">{place.travel_time}</span></h1>
                            </div>
                        </div>
                        <h2 className="card-title text-2xl w-[520px] text-black h-[60px]">
                            {place.tourist_spot_name}
                        </h2>
                        <div className="flex my-2 gap-3">
                            <h1 className="card-title text-xl font-medium text-left text-black">
                                Location: <span className="text-sky-600">{place.location}, {place.country_name}</span>
                            </h1>
                        </div>
                        <div>
                            <h1 className="card-title text-xl font-medium w-[440px] text-left text-rose-600">
                                {place.short_description}
                            </h1>
                        </div>
                        <div className="flex my-2">
                            <h2 className="card-title font-medium text-black">
                                Ticket Price: <span className="font-bold text-amber-500">{place.average_cost}</span>
                            </h2>
                        </div>
                        <div className="flex my-2">
                            <h1 className="font-medium text-xl text-black">Visitors per Year: <span className="text-green-700">{place.total_visitors_per_year}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeDetails;