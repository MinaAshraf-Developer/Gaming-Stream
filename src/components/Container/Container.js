import "./container.css"

const Container = (props) => {
  return (
    <div className="container main-container">
      <br/>
     {props.children}
    </div>
  )
}

export default Container
