import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import AuthDetails from "./AuthDetails";
import s from './singIn.module.css'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false); // состояние для отображения формы

    function logIn(e: React.FormEvent) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("");
                setEmail("");
                setPassword("");
                setIsAuthenticated(true);
            })
            .catch((error) => {
                console.log(error);
                setError("SORRY, COULDN'T FIND YOUR ACCOUNT");
            });
    }

    const handleSignOut = () => {
        setIsAuthenticated(false);
        setShowLoginForm(false); // скрыть форму после выхода
    };

    return (
        <div>
            {!isAuthenticated ? (
                !showLoginForm ? (
                    // Кнопка для открытия формы
                    <button onClick={() => setShowLoginForm(true)}
                            className={s.button}
                    >Login</button>
                ) : (
                    // Форма для логина
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
                        <button type="submit" >Submit</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                )
            ) : (
                // Компонент AuthDetails и аватар после успешного входа
                <div>
                    <AuthDetails onSignOut={handleSignOut} />
                    <img
                        src="https://wpjournalist.nl/wp-content/uploads/2021/09/myAvatar.png"
                        alt="User Avatar"
                    />
                </div>
            )}
        </div>
    );
};

export default SignIn;
