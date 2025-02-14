import DCcomicsShop from "./FooterComponents/DCcomicsShop";
import DC from "./FooterComponents/DC"
import Sites from "./FooterComponents/Sites"
import Button from "./FooterComponents/Button";
import Social from "./FooterComponents/Social";
import { footerLinksDCcomics, footerLinksShop, termLinks } from "../../Data/footerLinks";
// Footer.jsx
export default function Footer() {

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