import React from 'react'
import { overviewStat } from '../constants'
import PieChart from '../components/PieChart'

const Dashboard = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Dashboard</h1>
      <div className='flex justify-between gap-10'>
        {overviewStat.map((stat, index) => {
          const { text, quantity, color, percentage } = stat
          const deg = Math.round((percentage / 100) * 360)
          return (
            <div
              key={index}
              className='bg-white rounded-md shadow-md flex justify-between p-5 w-full items-center'
            >
              <div className='flex flex-col space-y-2'>
                <p className='text-light'>{text}</p>
                <p className='font-semibold text-2xl'>{quantity}</p>
              </div>
              <PieChart color={color} degree={deg} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
