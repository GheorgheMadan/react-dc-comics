import comics from '../../../Data/comics.js'

// Cards.jsx
export default function Cards() {
    return (
        <div>
            {comics.map((element) => (
                <li>{element.title}</li>
            ))}
        </div>
    )
}