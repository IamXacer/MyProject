import React from "react";
import styles from "./Header.module.css"
import Nav from "../nav/Nav";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SingIn";
export const Header = () => {
    return (
        <div className={styles.header}>

            <div className={styles.signUp}>
                 <SignUp />

        </div>
            <div className={styles.signIn}>
                <SignIn />
            </div>
        </div>

    )
}