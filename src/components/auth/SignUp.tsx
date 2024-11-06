import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import style from './sighUp.module.css';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");
    const [error, setError] = useState("");

    function register(e: React.FormEvent) {
        e.preventDefault();
        if (copyPassword !== password) {
            setError("Passwords didn't match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("");
                setEmail("");
                setCopyPassword("");
                setPassword("");
            })
            .catch((error) => {
                console.log(error);
                setError("Failed to create an account");
            });
    }

    return (
        <div className={style.formContainer}>
            <h2 className={style.h2}>Create an account</h2>
            <form onSubmit={register}>
                <input
                    className={style.inputField}
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <input
                    className={style.inputField}
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <input
                    className={style.inputField}
                    placeholder="Please enter your password again"
                    value={copyPassword}
                    onChange={(e) => setCopyPassword(e.target.value)}
                    type="password"
                />
                <button className={style.button} type="submit">Create</button>
                {error && <p className={style.errorMessage}>{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
