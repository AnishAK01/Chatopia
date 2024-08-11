import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

import React from 'react'

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()


    const signup = async ({ fullName, username, password, gender, confirmPassword }) => {

        const success = handleInputErrors({ fullName, username, password, gender, confirmPassword })
        if (!success) return;
        setLoading(true);
        try {

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, gender, confirmPassword })
            });

            const data = await res.json();
            // console.log(data);
            if (data.error) {
                throw new Error(data.error)
            }

            //localstorage
            localStorage.setItem("chat-user", JSON.stringify(data))
            //context
            setAuthUser(data)


        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup }
}

export default useSignup;

function handleInputErrors({ fullName, username, password, gender, confirmPassword }) {
    if (!fullName || !username || !password || !gender || !confirmPassword) {
        toast.error('Please fill in all fields')
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }

    if (password.length < 6) {
        toast.error('Password must be atleast 6 characters')
        return false
    }
    return true;
}