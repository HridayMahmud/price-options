import React from 'react'
import PriceOption from '../PriceOption/PriceOption';
const data = [
               { "id": 1, "name": "Basic Membership", "price": 30, "billing_type": "monthly", "features": ["Access to gym during standard hours", "Free locker service", "Access to cardio and weight equipment","Access to cardio and weight equipment","Access to cardio and weight equipment"] },
               { "id": 2, "name": "Standard Membership", "price": 50, "billing_type": "monthly", "features": ["24/7 gym access", "Free locker service", "Access to cardio and weight equipment", "5 free group fitness classes per month"] },
               { "id": 3, "name": "Premium Membership", "price": 75, "billing_type": "monthly", "features": ["24/7 gym access", "Priority locker service", "Access to cardio and weight equipment", "Unlimited group fitness classes", "1 personal training session per month"] },
               { "id": 4, "name": "Elite Membership", "price": 100, "billing_type": "monthly", "features": ["24/7 gym access", "Personal locker", "Access to cardio and weight equipment", "Unlimited group fitness classes", "Weekly personal training sessions", "Access to sauna and spa facilities"] },
               { "id": 5, "name": "Pay-Per-Visit", "price": 10, "billing_type": "per visit", "features": ["Access to gym during standard hours", "Pay only for the day you use the gym", "Access to cardio and weight equipment"] }
             ];
             
const PriceOptions = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3  gap-10'>
      {
       data.map(priceoption=><PriceOption key={priceoption.id} priceoption={priceoption}></PriceOption>)
      }
    </div>
  )
}

export default PriceOptions
