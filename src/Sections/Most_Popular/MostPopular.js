
import "./MostPopular.css"
import { Card, SectionHeader, SectionWrapper } from "../../components/linksComponent"
import {Data} from "../../Data/Data"






const MostPopular = () => {

 

  const cards = Data.map(card => {
    return <Card key={card.id} image={card.image} title={card.title } rate={card.rate } download={card.download } category={card.category}   />
  })
  return (
    <>
      <SectionWrapper>
        <SectionHeader>
         Most Popular
    </SectionHeader>
        <div className="most-popular-items"> 
          {cards}
          
        
      
        </div>

   </SectionWrapper>
    </>
  )
}

export default MostPopular
