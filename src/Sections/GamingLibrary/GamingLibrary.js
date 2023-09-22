import "./GamingLibrary.css"
import  {SectionHeader}  from "../../components/linksComponent"
import { SectionWrapper } from "../../components/linksComponent"
import  GamingCard  from "../../components/GamingCard.js/GamingCard"
import GamingData from "../../Data/GamingData"

const GamingLibrary = () => {
    const Cards = GamingData.map(card => {
      return <GamingCard key={ card.id } image ={ card.image } title={ card.title } category={ card.category }
        download={ card.download } date={ card.date_added } hours_played={card.hours_played} />
  })
  return (
    <div>
      <>
      <SectionWrapper>
        <SectionHeader>
      Gaming Library
    </SectionHeader>
        <div className="gaming-library-cards"> 
      {Cards}
        
      
        </div>

   </SectionWrapper>
    </>  
    </div>
  )
}

export default GamingLibrary
