
// Header.jsx
export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div id="container-img">
                    <img src="./public/img/dc-logo.png" alt="" id="logo" />
                </div>
                <div>
                    <ul className="nav">
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEO</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </div>
            </div>
        </header >
    );
} 