// Cards.jsx
export default function cards() {
    return (
        <section id="container-cards">
            <div id="col">
                <div className="card">
                    <img src="./public/img/buy-comics-digital-comics.png" alt="" className="imgCard" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="card">
                    <img src="./public/img/buy-comics-merchandise.png" alt="" className="imgCard" />
                    <span>DC MERCHANDISE</span>
                </div>
                <div className="card">
                    <img src="./public/img/buy-comics-subscriptions.png" alt="" className="imgCard" />
                    <span>SUBSCRIPTION</span>
                </div>
                <div className="card">
                    <img src="./public/img/buy-comics-shop-locator.png" alt="" className="imgLocator" />
                    <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="card">
                    <img src="./public/img/buy-dc-power-visa.svg" alt="" className="imgCard" />
                    <span>DC POWER VISA</span>
                </div>
            </div>
        </section>
    );
}