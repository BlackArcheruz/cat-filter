import './card.css'

export const Card = props =>(
    <div className="card-container">
        <img 
        src={`https://robohash.org/N${props.cat.id}.png?set=set4`}
        alt="" 
        width="180px" 
        height="180px" />
        <h3>{props.cat.name}</h3>
        <p>{props.cat.email}</p>
    </div>
)