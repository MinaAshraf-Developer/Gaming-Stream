import "./GamingCard.css"
import {SecondaryButton} from "../Button/button"

const GamingCard = (props) => {
  return (
    <div className="gaming-library-card">
      <ul>
        <li ><img className="gaming-img" src={ props.image } alt=""></img></li>
        <li><h4 className="title">{ props.title }</h4> <span>{ props.category }</span></li>
        <li><h4>Hours Played</h4> <span>{ props.hours_played }</span></li>
        <li><h4>Currently</h4> <span>{ props.download }</span></li>
        <SecondaryButton LinkTo="/#">Download</SecondaryButton>
         
        
      </ul>
    </div>
  )
}

export default GamingCard
