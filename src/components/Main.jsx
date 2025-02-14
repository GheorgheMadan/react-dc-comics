import Banner from './MainComponents/Banner'
import Cards from './MainComponents/Cards';
// Main.jsx
export default function Main() {
    return (
        <main>
            <section id="container-cards">
                <Cards />
            </section>
            <section id="container-banner">
                <Banner />
            </section>
        </main>
    );
} 