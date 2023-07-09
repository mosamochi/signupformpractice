import Link from "next/link"
import PlanCard from "../components/Card/plan-card"
import "./plan-info-styles.css"


export default function PlanInfo() {

let basePlan = {
    planName: 'Basic Plan',
    price: 10,
    features: ['Curated programming challenges', 'Access to Discord Server', 'Access to job search hub']
}

let plusPlan = {
    planName: 'Plus Plan',
    price: 20,
    features: ['All features of Basic Plan and...', 'One on one messaging with expert team', 'Livestreams of tutorials']
}

let topPlan = {
    planName: 'Top Plan',
    price: 30,
    features: ['All features of Plus Plan and...', 'Unlimited web hosting', 'Exclusive content and early access to new challenges']
}
    
    return (
       <>
        <header><h1>Pick the plan best for you:</h1></header>
        <main >
        <h2 className="link"> <Link href="/"> Create your account to start your free 7 day trial </Link></h2>
        <PlanCard planName={basePlan.planName} price={basePlan.price} features={basePlan.features} ></PlanCard>
        <PlanCard planName={plusPlan.planName} price={plusPlan.price} features={plusPlan.features} ></PlanCard>
        <PlanCard planName={topPlan.planName} price={topPlan.price} features={topPlan.features} ></PlanCard>
        
        
        
        </main>
      </>
    )
  }
  