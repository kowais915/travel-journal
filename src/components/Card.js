export default function Card (props){


    return(

        <div className ="card">

          
            <div className = "image">
                <img  src={props.item.imageUrl} alt="location" width="125px" height="168px"/>
            </div>

            
            <div className="info">


                <div className = "location">
                    <p className="icon">Icon</p>
                    <p className="location-title">{props.item.location}</p>
                </div>

                <div className = "title">
                    <h2>{props.item.title}</h2>
                </div>

                <div className = "data">
                    <p>{props.item.endDate}</p>
                </div>

                <div className = "details">
                    <p>
                   {props.item.description}
                    </p>
                </div>


            </div>


        </div>
    )
}