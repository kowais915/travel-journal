import icon from "../images/location.png"

const Location = (props) => {
    return (
        <main className = "location">
          <div className="image">
            <img src={props.item.imageUrl}/>
            
   
          </div>
          
          <div className="info">
            <span className="icon"><img  src={icon}/>{props.item.location}  <a href={props.item.googleMapsUrl}>Google Maps URL</a></span>
            <h1>{props.item.title}</h1>
            <p><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
            <p>{props.item.description}</p>
          </div>

        </main>
    );
}

export default Location;