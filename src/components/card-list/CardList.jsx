import { Card } from '../card/Card'
import './card-list.css'

export const CardList = (props)=>{
    return(<div className="card-list">
        {
          props.cats.map(
            cat=>(
                <Card key={cat.id} cat={cat}/>
            )
          )
        }      
    </div>)
}