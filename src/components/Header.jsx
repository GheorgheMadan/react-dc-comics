import NavBar from "./HeaderComponents/NavBar";
import Logo from "./HeaderComponents/Logo";

// Header.jsx
export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <Logo />
                <NavBar />
            </div>
        </header >
    );
} 