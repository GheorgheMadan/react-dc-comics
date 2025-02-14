import Banner from './MainComponents/Banner'
import Cards from './MainComponents/Cards';
// IMPORT DATA comics dalla cartella data


// Main.jsx
export default function Main() {
    return (
        <main>
            <section id="container-first-main">
                <div className='container-current-series'>
                    <span className='current-series'>CURRENT SERIES</span>
                </div>
                <Cards />
                <div className='container-btn'>
                    <button className='btn-load-more'>LOAD MORE</button>
                </div>
            </section>
            <section id="container-banner">
                <Banner />
            </section>
        </main>
    );
} 