import React from "react"
import {ImLocation} from "react-icons/im"


export default function Card(props){
    console.log(props)
    return(
        <div className="card--el">
            <img className="card--img" src={props.dataItem.imageUrl} alt="mount fuji"></img>
            <div className="card--content">
                <div className = "card--location">
                    <ImLocation className="locationIcon"/> 
                    <span className="city--name">{props.dataItem.location}
                    </span>
                    <a classname="googleUrl" href={props.dataItem.googleMapsUrl}> View on Google Maps</a>
                </div>
                <h1 className="location--name">{props.dataItem.title}</h1>
                <h1 className="travel--duration"><b>{props.dataItem.startDate} - {props.dataItem.endDate}</b></h1>
                <h3 className="place-desc">{props.dataItem.description}</h3>
            </div>
            <hr/>
        </div>
    )
}

// export default [
//     {
//         title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
//     }
// ]