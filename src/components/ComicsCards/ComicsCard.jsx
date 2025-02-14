// Card.jsx
export default function Card(props) {
    // Destructuring del oggetto
    const { series, thumb } = props.comicsCards
    return (
        <>
            {
                < div className="card" >
                    <div>
                        <img src={thumb} alt={series} className="thumb" />
                    </div>
                    <span>{series.toUpperCase()}</span>
                </div >
            }
        </>
    )
}