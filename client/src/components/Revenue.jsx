import React from 'react'
import Chart from 'react-apexcharts'
import { BsArrowUpShort } from 'react-icons/bs'
import { TotalRevenueOptions, TotalRevenueSeries } from '../constants'
const Revenue = () => {
  return (
    <div className='w-full flex-1 max-w-[800px] rounded-md shadow-sm bg-white p-4'>
      <h1 className='text-lg font-semibold'>Total Revenue</h1>
      <div className='flex gap-8 items-center'>
        <p className='text-2xl font-bold'>$236,535</p>
        <div className='flex space-x-4 items-center'>
          <div className='w-4 h-4 bg-primary rounded-full text-white flex justify-center items-center'>
            <BsArrowUpShort />
          </div>
          <div>
            <p className='text-primary'>0.8%</p>
            <p className='text-light'>Than last month</p>
          </div>
        </div>
      </div>
      <Chart
        options={TotalRevenueOptions}
        series={TotalRevenueSeries}
        type='bar'
        height={300}
      />
    </div>
  )
}
export default Revenue
