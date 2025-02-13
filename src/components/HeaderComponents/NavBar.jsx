const navLinks = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: true },
    { id: 3, text: "MOVIES", url: "#", current: false },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#" },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: false },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: false }
];

// NavBar.jsx
export default function NavBar() {
    return (
        <div>
            <ul className="nav">
                {
                    navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

// {
//     /* <li><a href="#">CHARACTERS</a></li>
//                 <li><a href="#">COMICS</a></li>
//                 <li><a href="#">MOVIES</a></li>
//                 <li><a href="#">TV</a></li>
//                 <li><a href="#">GAMES</a></li>
//                 <li><a href="#">COLLECTIBLES</a></li>
//                 <li><a href="#">VIDEO</a></li>
//                 <li><a href="#">FANS</a></li>
//                 <li><a href="#">NEWS</a></li>
//                 <li><a href="#">SHOP</a></li> */}