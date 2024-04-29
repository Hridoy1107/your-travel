import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Edit = () => {

    const places = useLoaderData();
    const { _id, name, email, place, country, location, cost, season, time, visitors, photo, details } = places
    console.log(_id)

    const handleEditPlace = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const place = form.place.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const photo = form.photo.value;
        const details = form.details.value;

        const editedPlace = { name, email, place, country, location, cost, season, time, visitors, photo, details }

        console.log(editedPlace);

        fetch(`https://your-travel-server.vercel.app/place/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedPlace)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Place Edited Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <>
            <div className="bg-slate-100 py-12 px-24 mt-10 rounded-2xl">
                <h2 className="mb-6 text-3xl font-bold text-rose-700">Edit your Place</h2>
                <form onSubmit={handleEditPlace}>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={name} name="name" placeholder="Your Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={email} name="email" placeholder="Your Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Tourist Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={place} name="place" placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Country Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={country} name="country" placeholder="Country Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={location} name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={cost} name="cost" placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={season} name="season" placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={time} name="time" placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Visitors Per Year</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={visitors} name="visitors" placeholder="Visitors Per Year" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Place Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={details} name="details" placeholder="Place Details" className="input input-bordered w-full h-[100px]" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Edit Place" className="btn btn-accent btn-block" />
                </form>
            </div>
        </>
    );
};

export default Edit;