import "./Card.css"
import { AiFillStar } from "react-icons/ai"
import {AiOutlineDownload} from "react-icons/ai"



const Card = (props) => {
  return (
          <div className="most-popular-item"> 
      <div className="card-wrapper"> 
              <img  className="most-popular-item-image image-pop img-fluid" src={ props.image } alt="Card" />
              <div className="most-popular-item-content"> 
                <h4 className="most-popular-item-title">{props.title}
            <br />
            
                  <span style={{color: "var(--color-primary)"}}>{props.category}</span>
                </h4>
                <ul>
            <li><span className="star"> <AiFillStar /></span><span> { props.rate }</span></li>
         
                  <li><span className="download"><AiOutlineDownload /></span><span> { props.download}</span></li>
                </ul>
              </div>
        </div>
        </div>
  )
}

export default Card
