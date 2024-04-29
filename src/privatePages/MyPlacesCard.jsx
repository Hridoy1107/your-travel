import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const MyPlacesCard = ({ place1, places, setPlaces }) => {

    const { _id, place, country, location, cost, season, time, visitors, photo } = place1

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://your-travel-server.vercel.app/place/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Place has been deleted.',
                                'success'
                            )
                            const remaining = places.filter(place2 => place2._id !== _id);
                            setPlaces(remaining);
                        }
                    })

            }
        })
    }

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
                    <div className="mt-3 flex gap-2">
                    <NavLink to={`/editPlace/${_id}`} className="btn w-1/2 my-2 btn-active btn-warning">Edit</NavLink>
                    <button to="/delete" onClick={() => handleDelete(_id)} className="btn w-1/2 my-2 btn-active btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

MyPlacesCard.propTypes = {
    place1: PropTypes.array.isRequired,
    places: PropTypes.array.isRequired,
    setPlaces: PropTypes.array.isRequired
};

export default MyPlacesCard;