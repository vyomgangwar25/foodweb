import React, { useState } from "react";
import { Link } from "react-router-dom";
const Registration = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleRegistration = async (e) => {
        try {
            e.preventDefault()
            const data = await fetch("http://localhost:8080/user/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    roleId: 1
                }),
            })
            const response = await data.text();
            console.log(response);
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
                <form className="bg-white   p-8 rounded-lg shadow-lg w-96" onSubmit={handleRegistration} >
                    <h2 className="text-2xl font-bold text-center mb-5 text-gray-700">
                        Registration
                    </h2>
                    <div className="mb-4 text-start">
                        <label className="block font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            className="border-b-2 border-gray-500  p-2 w-full   outline-none"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="text-start mb-4">
                        <label className="block font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            className="border-b-2 border-gray-500  p-2 w-full   outline-none  "
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
                        Registration
                    </button>
                    <p className="mt-2">Already have account?{" "}<Link to="/login" className="text-blue-500 cursor-pointer"   >Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;
