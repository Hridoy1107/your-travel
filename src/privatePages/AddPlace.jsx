const AddPlace = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (        
        <>
            <div className="bg-slate-100 py-12 px-24 mt-10 rounded-2xl">
                <h2 className="mb-6 text-3xl font-bold text-teal-700">Add A Place</h2>
                <form onSubmit={handleAddCoffee}>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Tourist Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="place" placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Country Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" placeholder="Country Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cost" placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="season" placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="time" placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-black">Visitors Per Year</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="visitors" placeholder="Visitors Per Year" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black">Place Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Place Details" className="input input-bordered w-full h-[100px]" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Place" className="btn btn-primary btn-block" />
                </form>
            </div>
        </>
    );
};

export default AddPlace;