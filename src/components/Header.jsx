import NavBar from "./HeaderComponents/NavBar";
import Logo from "./HeaderComponents/Logo";
import Jumbotron from './HeaderComponents/Jumbotron';


// Header.jsx
export default function Header() {
    // contenuto 
    const navLinks = [
        { id: 1, text: "CHARACTERS", url: "#", current: false },
        { id: 2, text: "COMICS", url: "#", current: true },
        { id: 3, text: "MOVIES", url: "#", current: false },
        { id: 4, text: "TV", url: "#", current: false },
        { id: 5, text: "GAMES", url: "#", current: false },
        { id: 6, text: "COLLECTIBLES", url: "#", current: false },
        { id: 7, text: "VIDEOS", url: "#", current: false },
        { id: 8, text: "FANS", url: "#", current: false },
        { id: 9, text: "NEWS", url: "#", current: false },
        { id: 10, text: "SHOP", url: "#", current: false }
    ];
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
