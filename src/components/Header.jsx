import NavBar from "./HeaderComponents/NavBar";
import Logo from "./HeaderComponents/Logo";
import Jumbotron from './HeaderComponents/Jumbotron';
import navLinks from "../../Data/navLinks";

// Header.jsx
export default function Header() {
    // contenuto 

    return (
        <header>
            <div className="row">
                <Logo />
                <NavBar links={navLinks} />
            </div>
            <Jumbotron />
        </header >
    );
} 
