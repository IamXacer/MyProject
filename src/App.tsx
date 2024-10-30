import "./App.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SingIn";
import AuthDetails from "./components/auth/AuthDetails";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./skills/Skills";
import {MyWork} from "./MyWork/MyWork";
import {Hiring} from "./hiring/Hiring";

function App() {
    return (
        <div className="App">
            <Header/>
            <SignUp />
            <SignIn />
            <AuthDetails />
            <Main/>
            <Skills/>
            <MyWork/>
            <Hiring/>
        </div>
    );
}

export default App;
