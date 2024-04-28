import { useLoaderData, useParams } from "react-router-dom";

const PlaceDetails = () => {

    const places = useLoaderData();
    const { id } = useParams();
    const place1 = places.find(place1 => place1._id === id);

    return (
        <>
            <div className="w-[1216px] rounded-2xl h-[500px] mt-10 bg-slate-400">
                <div className="flex">
                    <div>
                        <img className="ml-12 my-16 absolute w-[640px] h-[350px] rounded-2xl" src={place1.photo} alt="" />
                    </div>
                    <div className="w-[500px] h-[300px] my-12 absolute card ml-[700px]">
                        <div className="flex my-1">
                            <div className="badge badge-accent mt-1">{place1.season}</div>
                            <div className=" absolute right-8">
                                <h1 className="font-medium text-black">Travel Time: <span className="text-green-800 font-semibold">{place1.time}</span></h1>
                            </div>
                        </div>
                        <h2 className="card-title text-2xl w-[520px] text-black h-[60px]">
                            {place1.place}
                        </h2>
                        <div className="flex my-2 gap-3">
                            <h1 className="card-title text-xl font-medium text-left text-black">
                                Location: <span className="text-sky-600">{place1.location}, {place1.country}</span>
                            </h1>
                        </div>
                        <div>
                            <h1 className="card-title text-xl font-medium w-[440px] text-left text-rose-600">
                                {place1.details}
                            </h1>
                        </div>
                        <div className="flex my-2">
                            <h2 className="card-title font-medium text-black">
                                Ticket Price: <span className="font-bold text-amber-500">${place1.cost}</span>
                            </h2>
                        </div>
                        <div className="flex my-2">
                            <h1 className="font-medium text-xl text-black">Visitors per Year: <span className="text-green-700">{place1.visitors}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceDetails;