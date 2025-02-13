// DC.jsx
export default function DC(props) {
    return (
        <div>
            <h4>DC</h4>
            <ul>
                {
                    props.linksTerms.map((link) => (
                        <li><a href="">{link.text}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}
// {/* <li><a href="#">Terms Of</a></li>
//                 <li><a href="#">Privacy policy (New)</a></li>
//                 <li><a href="#">Ad Choices</a></li>
//                 <li><a href="#">Advertising</a></li>
//                 <li><a href="#">Jobs</a></li>
//                 <li><a href="#">Subscriptions</a></li>
//                 <li><a href="#">Talent Workshops</a></li>
//                 <li><a href="#">CPSC Certificates</a></li>
//                 <li><a href="#">Ratings</a></li>
//                 <li><a href="#">Shop Help</a></li>
//                 <li><a href="#">Contact Us</a></li> */}