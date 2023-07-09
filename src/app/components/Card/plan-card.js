
import React from "react";
import './plan-card-styles.css'

export default function PlanCard(props){
const planName = props.planName
const monthlyPrice = props.price
const features = props.features


    return (
        <div className="main-card">
            <h2>{planName}</h2>
            <h3>${monthlyPrice}/mo, billed monthly</h3>
            <h3 className="featuresHeading">Features & Benefits</h3>
            <ul className="featuresList">
                {features.map(function(object,i){
                    return <li key={i}>{object}</li>
                })}
            </ul>


        </div>
        
    )
}