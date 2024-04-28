import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const PlaceCard = ({ place1 }) => {

    const { user } = useContext(AuthContext);

    const { _id, place, country, location, cost, season, time, visitors, photo } = place1
    return (
        <>
            <div>
                <div className=" hover:transform hover:translate-x-2 hover:translate-y-2 card h-[540px] w-[384px] shadow-2xl hover:shadow-2xl bg-slate-200">
                    <img className="w-[384px] h-[200px] p-1 rounded-2xl" src={photo} alt="" />
                    <div className="card-body w-[380px] h-[100px]">
                        <div className="flex my-1">
                            <div className="badge badge-accent mt-1">{season}</div>
                            <div className=" absolute right-10">
                                <h1 className="font-medium text-black">Travel Time: <span className="text-green-800 font-semibold">{time}</span></h1>
                            </div>
                        </div>
                        <h2 className="card-title w-[320px] text-black h-[20px]">
                            {place}
                        </h2>
                        <div className="flex my-2 gap-3">
                            <h1 className="font-medium text-black">Location: <span className="text-sky-600">{location}, {country}</span></h1>
                        </div>
                        <div className="my-1">
                            <h2 className="card-title font-medium text-black">
                                Ticket Price: <span className="font-bold text-amber-500">${cost}</span>
                            </h2>
                            <div className="absolute flex gap-2 my-2">
                                <h1 className="font-medium text-black">Visitors per Year: <span className="text-green-700">{visitors}</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        {
                            user ?
                                <NavLink to={`/details/${_id}`} className="btn w-3/4 my-2 btn-active btn-primary">View Details</NavLink>
                                :
                                <NavLink to="/login" className="btn w-3/4 my-2 btn-active btn-primary">View Details</NavLink>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

PlaceCard.propTypes = {
    place1: PropTypes.array.isRequired
};

export default PlaceCard;