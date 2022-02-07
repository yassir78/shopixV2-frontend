import './App.css';
import {Home} from "./pages/home";
import {Navbar} from "./components/navbar";
import * as React from "react";
import {Footer} from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import {Perfumes} from "./pages/perfumes";
import {SingUp} from "./pages/singUp";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Routes>
                <Route path="/perfumes" element={<Perfumes/>}/>
                <Route path="/signUp" element={<SingUp/>}/>

                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    )
        ;
}

export default App;
