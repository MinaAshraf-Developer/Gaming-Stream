import "./Hero.css"



import PrimaryButton from   "../../components/Button/button";


const Hero = () => {
  return (

    <div className="hero-main  ">
      <div className="cover">
        <div className="hero-text">
              <h6 className="hero-subtitle">Welcome To Cyborg</h6>
                 <h4 className="hero-title"> <em>Browse</em> Our Poular Games Here</h4>
          </div>
    <PrimaryButton>Browse Now</PrimaryButton>
      </div>
          
      
    </div>
 
     
  )
}

export default Hero
