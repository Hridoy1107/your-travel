import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const { signInUser, signInWithGoogle, facebookLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSuccess('');

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login Successfully.')
                e.target.reset();
                navigate('/');

                const user = { email };
                fetch('https://your-travel-server.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user added to the database')
                            Swal.fire({
                                title: 'Success!',
                                text: 'User Login Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                              })
                        }
                    })
                
            })
            .catch(error => {
                console.error(error)
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
                    <h2 className="text-3xl my-10 text-center font-semibold text-blue-600">Please Login</h2>
                    <form onSubmit={handleLogin}>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="Email" required />
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
                        <input className="btn btn-primary mb-4 w-full" type="submit" value="Login" />
                    </form>
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <h1 className="font-semibold">Login with other accounts</h1>
                    <div className="flex gap-3 ml-56 my-1">
                        <div onClick={handleGoogleSignIn} className="btn btn-outline h-12 w-12"><FaGoogle /></div>
                        <div onClick={handleFacebookSignIn} className="btn btn-outline h-12 w-12"><FaFacebook /></div>
                        <div onClick={handleGithubSignIn} className="btn btn-outline h-12 w-12"><FaGithub /></div>
                    </div>
                    <p className="text-center mt-4">Don't have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
                </div>
            </div>
        </>



    );
};

export default Login;