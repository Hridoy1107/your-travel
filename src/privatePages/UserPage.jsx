import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const UserPage = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="mt-10">
                <div className="avatar">
                    <div className="w-60 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-medium text-4xl">Name: <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-sky-700 to-red-400 font-semibold text-4xl">{user.displayName}</span></h1>
                <h1 className="font-medium text-4xl">Email: <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-violet-700 to-red-400 font-semibold text-4xl">{user.email}</span></h1>
            </div>
        </>
    );
};

export default UserPage;