

// NavBar.jsx
export default function NavBar(props) {
    return (
        <div>
            <ul className="nav">
                {
                    props.links.map((link) => (
                        <li key={link.id}>
                            <a href={link.url} className={link.current ? 'active' : ''}>
                                {link.text}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}