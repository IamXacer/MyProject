import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function logIn(e: React.FormEvent) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                console.log(error);
                setError("SORRY, COULDN'T FIND YOUR ACCOUNT");
            });
    }

    return (
        <div>
            <form onSubmit={logIn}>
                <h2>Log in</h2>
                <input
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <input
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <button type="submit">Login</button>
                {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            </form>
        </div>
    );
};

export default SignIn;
