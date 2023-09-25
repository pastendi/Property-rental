import React from 'react'
import { propertyReferralsInfo } from '../constants'

const Referral = () => {
  return (
    <div className='min-w-[490px] p-4 flex flex-col rounded-md bg-white shadow-sm '>
      <h1 className='text-lg font-semibold mb-6'>Property Referrals</h1>
      <div className='flex flex-col w-full space-y-4'>
        {propertyReferralsInfo.map((referral, index) => (
          <ProgressBar key={index} {...referral} />
        ))}
      </div>
    </div>
  )
}

const ProgressBar = ({ title, percentage, color }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex justify-between'>
        <p>{title}</p>
        <p>{percentage}%</p>
      </div>
      <div className='w-full h-2 rounded-full bg-light'>
        <div
          className={` h-full rounded-full`}
          style={{ background: color, width: percentage + '%' }}
        ></div>
      </div>
    </div>
  )
}
export default Referral
