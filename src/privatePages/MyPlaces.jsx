import { Link, useNavigate } from "react-router-dom";
import MyPlacesCard from "./MyPlacesCard";
import { useState, useContext, useEffect, } from 'react';
import { AuthContext } from "../provider/AuthProvider";

const MyPlaces = () => {
    
    const { user } = useContext(AuthContext);
    const [places, setPlaces] = useState([]);
    const navigate = useNavigate();

    const url = `https://your-travel-server.vercel.app/place?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setPlaces(data)
                }
                else{
                    navigate('/');
                }
            })
    }, [url, navigate]);

    return (
        <>
            <div className="mt-5">
                <h1 className=" text-5xl font-bold text-emerald-500
            animate-text">Places you have added</h1>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 animate__animated animate__fadeInUp">
                {
                    places.map(place1 => <MyPlacesCard key={place1._id} place1={place1} places={places} setPlaces={setPlaces}></MyPlacesCard>)
                }
            </div>
            <div>
            <p className="text-center text-2xl mt-4">Didn't add a place? <Link className="text-blue-600 font-bold" to="/add-place">Add a place</Link></p>
                </div>
        </>
    );
};

export default MyPlaces;