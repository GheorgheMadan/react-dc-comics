import DCcomicsShop from "./FooterComponents/DCcomicsShop";
import DC from "./FooterComponents/DC"
import Sites from "./FooterComponents/Sites"
import Button from "./FooterComponents/Button";
import Social from "./FooterComponents/Social";
// Footer.jsx
export default function Footer() {
    const footerLinksDCcomics = [
        { id: 1, text: "Characters", url: "#", current: false },
        { id: 2, text: "Comics", url: "#", current: false },
        { id: 3, text: "Movies", url: "#", current: false },
        { id: 4, text: "TV", url: "#", current: false },
        { id: 5, text: "Games", url: "#", current: false },
        { id: 6, text: "Videos", url: "#", current: false },
        { id: 7, text: "News", url: "#", current: false },
    ];
    const footerLinksShop = [
        { id: 1, text: "Characters", url: "#", current: false },
        { id: 2, text: "Comics", url: "#", current: false }
    ];
    const termLinks = [
        { id: 1, text: "Terms Of", url: "#", current: false },
        { id: 2, text: "Privacy policy (New)", url: "#", current: true },
        { id: 3, text: "Ad Choices", url: "#", current: false },
        { id: 4, text: "Advertising", url: "#", current: false },
        { id: 5, text: "Jobs", url: "#", current: false },
        { id: 6, text: "Subscriptions", url: "#", current: false },
        { id: 7, text: "Talent Workshops", url: "#", current: false },
        { id: 8, text: "CPSC Certificates", url: "#", current: false },
        { id: 9, text: "Ratings", url: "#", current: false },
        { id: 10, text: "Shop Help", url: "#", current: false },
        { id: 9, text: "Contact Us", url: "#", current: false }
    ];
    return (
        <footer>
            <section id="first-footer">
                <div id="container-footer1">
                    <DCcomicsShop links={footerLinksDCcomics} linksShop={footerLinksShop} />
                    <DC linksTerms={termLinks} />
                    <Sites />
                </div>
            </section>
            <section id="second-footer">
                <section id="last-footer">
                    <Button />
                    <Social />
                </section>
            </section>
        </footer>
    );
} 