import Card from "./Card";
const data = require("../data");



export default function Content(){

    const dataArr = data.map((item)=>{
        console.log(item);

        return(
            <Card
               item = {item}
            
            
            />
        )
    })
    return(
        <div className="content">

           {dataArr}
            
        </div>
    )
}