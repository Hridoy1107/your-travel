import PropTypes from 'prop-types';

const HomePlaces = ({place}) => {

    const { tourist_spot_name, image, seasonality, average_cost, country_name, travel_time, location, total_visitors_per_year, short_description } = place

    return (
        <>
        <div className=" hover:transform hover:translate-x-2 hover:translate-y-2 card h-[600px] w-[384px] shadow-2xl hover:shadow-2xl bg-slate-200">
            <img className="w-[384px] h-[200px] p-1 rounded-2xl" src={image} alt="" />
            <div className="card-body w-[380px] h-[100px]">
                <div className="flex my-1">
                    <div className="badge badge-accent mt-1">{seasonality}</div>
                    <div className=" absolute right-10">
                        <h1 className="font-medium text-black">Travel Time: <span className="text-green-800 font-semibold">{travel_time}</span></h1>
                    </div>
                </div>
                <h2 className="card-title w-[320px] text-black h-[20px]">
                {tourist_spot_name}
                </h2>
                <div className="flex my-2 gap-3">
                <h1 className="font-medium text-black">Location: <span className="text-sky-600">{location}, {country_name}</span> </h1>
                </div>
                <div className="h-[100px] w-[320px] my-1 relative right-8 font-medium">
                    <p className="text-rose-500">{short_description}</p>
                </div>
                <div className="my-1">
                    <h2 className="card-title font-medium text-black">
                        Ticket Price: <span className="font-bold text-amber-500">{average_cost}</span>
                    </h2>
                    <div className="absolute flex gap-2 my-2">
                    <h1 className="font-medium text-black">Travelers per Year: <span className="text-green-700">{total_visitors_per_year}</span></h1> 
                    </div>
                </div>
            </div>

        </div>
    </>
    );
};

HomePlaces.propTypes = {
    place: PropTypes.array.isRequired
};

export default HomePlaces;