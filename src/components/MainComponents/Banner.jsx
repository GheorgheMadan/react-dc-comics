// Banner.jsx
export default function Banner() {
    return (
        <div id="row-banner">
            <div className="banner">
                <img src="./public/img/buy-comics-digital-comics.png" alt="" className="imgBanner" />
                <span>DIGITAL COMICS</span>
            </div>
            <div className="banner">
                <img src="./public/img/buy-comics-merchandise.png" alt="" className="imgBanner" />
                <span>DC MERCHANDISE</span>
            </div>
            <div className="banner">
                <img src="./public/img/buy-comics-subscriptions.png" alt="" className="imgBanner" />
                <span>SUBSCRIPTION</span>
            </div>
            <div className="banner">
                <img src="./public/img/buy-comics-shop-locator.png" alt="" className="imgLocator" />
                <span>COMIC SHOP LOCATOR</span>
            </div>
            <div className="banner">
                <img src="./public/img/buy-dc-power-visa.svg" alt="" className="imgBanner" />
                <span>DC POWER VISA</span>
            </div>
        </div>
    );
}