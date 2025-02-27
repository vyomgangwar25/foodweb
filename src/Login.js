import React, {useState } from "react";
import { Link } from "react-router-dom";

 
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await fetch("http://localhost:8080/user/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const response = await data.json()
            console.log(response)
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="relative w-full h-screen">

            <img
                src="https://get.fohlio.com/hs-fs/hubfs/Imported_Blog_Media/The-Psychology-of-Restaurant-Interior-Design-Part-5-Architecture-Fohlio-Faith-and-Flower-1.jpg?width=1500&height=1000&name=The-Psychology-of-Restaurant-Interior-Design-Part-5-Architecture-Fohlio-Faith-and-Flower-1.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Restaurant Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <form className="bg-white   p-8 rounded-lg shadow-lg w-96" onSubmit={handleLogin}>
                    <h2 className="text-2xl font-bold text-center mb-5 text-gray-700">
                        Login
                    </h2>

                    <div className="mb-4 text-start">
                        <label className="block font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            className="border-b-2 border-gray-500  p-2 w-full   outline-none "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label className="block font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            className="border-b-2 border-gray-500 p-2 w-full rounded  outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-300">
                        Login
                    </button>
                    <p className="mt-2">doesn't have account?{" "}<Link to="/registration" className="text-blue-500 cursor-pointer"   >Sign up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
