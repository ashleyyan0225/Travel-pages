import React from "react"

export default function Travel(props) {
    return (
        <>
        <div className="grid-container">
            <img src={props.imageUrl} className="travel-img" />
            <div className="grid-item-1">
                <div className="location-line">
                    <p className="country">{props.location}</p>
                    <a href={props.googleMapsUrl} >View on Google Maps</a>
                </div>
                <h1 className="big-title">{props.title}</h1>
                <h4 className="date">{props.startDate}-{props.endDate}</h4>
                <p className="description">{props.description}</p>
            </div>
        </div>
        <hr />
        </>
    )
}
