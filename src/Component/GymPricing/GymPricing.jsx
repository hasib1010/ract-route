import Membership from "./Membership";

const GymPricing = () => {
    const price=[
        {
            "id": 1,
            "membership_type": "Standard",
            "price": 50.00,
            "features": [
                "Access to cardio and strength equipment",
                "Group fitness classes",
                "Locker room access",
                "Basic fitness assessment"
            ]
        },
        {
            "id": 2,
            "membership_type": "Premium",
            "price": 80.00,
            "features": [
                "Access to cardio and strength equipment",
                "Group fitness classes",
                "Locker room access",
                "Advanced fitness assessment",
                "Personal trainer consultation"
            ]
        },
        {
            "id": 3,
            "membership_type": "VIP",
            "price": 120.00,
            "features": [
                "Access to cardio and strength equipment",
                "Group fitness classes",
                "Locker room access",
                "Advanced fitness assessment",
                "Unlimited personal training sessions",
                "Nutritional consultation"
            ]
        }
    ]
    
    return (
        <div className="flex justify-around mt-14 ">
            {price.map(plan=><Membership plan={plan}></Membership>)}
        </div>
    )}
    export default GymPricing;
