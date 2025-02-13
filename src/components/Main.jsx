import Cards from './MainComponents/Cards'

// Main.jsx
export default function Main() {
    return (
        <main>
            <section id="container-content">
                <div>
                    <p> --&gt; Content goes here &lt;-- </p>
                </div>
            </section>
            <section id="container-cards">
                <Cards />
            </section>
        </main>
    );
} 