// DCcomicsShop.jsx
export default function DCcomicsShop(props) {
    return (
        <div>
            <h4>DC COMICS</h4>
            <ul>
                {
                    props.links.map((link) => (
                        <li><a href="">{link.text}</a></li>
                    ))
                }
            </ul>
            <h4>SHOP</h4>
            <ul>
                {
                    props.linksShop.map((link) => (
                        <li><a href="">{link.text}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}
{/* <li><a href="#">Shop DC</a></li>
                <li><a href="#">Shop DC Collectibles</a></li> */}
// {/* <li><a href="#">Characters</a></li>
//                 <li><a href="#">Comics</a></li>
//                 <li><a href="#">Movies</a></li>
//                 <li><a href="#">TV</a></li>
//                 <li><a href="#">Games</a></li>
//                 <li><a href="#">Videos</a></li>
//                 <li><a href="#">News</a></li> */}