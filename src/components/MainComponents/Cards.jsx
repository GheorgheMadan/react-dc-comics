// Cards.jsx
import ComicsCard from "../ComicsCards/ComicsCard.jsx";
import comics from '../../../Data/comics.js';

// Cards.jsx
export default function Cards() {
    return (
        <div className="container-cards">
            {comics.map(element => <ComicsCard key={element.id} comicsCards={element} />
            )}
        </div>
    );
}