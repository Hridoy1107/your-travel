import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { signInWithGoogle, facebookLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        console.log(name, email, password, photo);

        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.')
                navigate('/user-profile');

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => console.log('Profile updated'))
                    .catch()

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleFacebookSignIn = () => {
        facebookLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <div>
                <div className="mx-auto w-1/2">
                    <h2 className="text-3xl my-10 text-center font-semibold text-blue-600">Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="mb-4 w-full  py-2 px-4" type="text" name="name" placeholder="Your Name" id="Name" required />
                        <br />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="Email" required />
                        <br />
                        <label className="label">
                            <span className="label-text">User Photo</span>
                        </label>
                        <input className="mb-4 w-full  py-2 px-4" type="text" required id="Photo" name="photo" placeholder="Photo URL" />
                        <br />
                        <div className="mb-4 relative border-none">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                className="w-full py-2 px-4"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                id="Password" required />
                            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }

                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className="btn btn-primary mb-4 w-full" type="submit" value="Register" />
                    </form>
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <h1 className="font-semibold">Register with other accounts</h1>
                    <div className="flex gap-3 ml-56 my-1">
                        <div onClick={handleGoogleSignIn} className="btn btn-outline h-12 w-12"><FaGoogle /></div>
                        <div onClick={handleFacebookSignIn} className="btn btn-outline h-12 w-12"><FaFacebook /></div>
                        <div onClick={handleGithubSignIn} className="btn btn-outline h-12 w-12"><FaGithub /></div>
                    </div>
                    <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </>
    );
};

export default Register;