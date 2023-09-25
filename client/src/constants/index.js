import { IoBarChartSharp } from 'react-icons/io5'
import { BsStarFill } from 'react-icons/bs'
import { BiBuildingHouse } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import { RiSettings4Fill } from 'react-icons/ri'
export const navLinks = [
  { text: 'Dashboard', path: '/', icon: IoBarChartSharp },
  { text: 'Property', path: '/property', icon: BiBuildingHouse },
  { text: 'Agent', path: '/agent', icon: FiUsers },
  { text: 'Review', path: '/review', icon: BsStarFill },
]

export const accountOptions = [
  { text: 'Edit Profile', path: '/profile', icon: FaUserCircle },
  { text: 'Setting', path: '/setting', icon: RiSettings4Fill },
]
export const overviewStat = [
  {
    text: 'Properties for sale',
    quantity: 684,
    color: '#475BE8',
    percentage: 75,
  },
  {
    text: 'Properties for rent',
    quantity: 546,
    color: '#FD8539',
    percentage: 60,
  },
  {
    text: 'Total customer',
    quantity: 5732,
    color: '#2ED480',
    percentage: 75,
  },
  { text: 'Total city', quantity: 90, color: '#FE6D8E', percentage: 60 },
]
export const TotalRevenueSeries = [
  {
    name: 'Last Month',
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: 'Running Month',
    data: [95, 84, 72, 44, 108, 108, 47],
  },
]
export const TotalRevenueOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`
      },
    },
  },
}

export const propertyReferralsInfo = [
  {
    title: 'Social Media',
    percentage: 64,
    color: '#6C5DD3',
  },
  {
    title: 'Marketplace',
    percentage: 40,
    color: '#7FBA7A',
  },
  {
    title: 'Websites',
    percentage: 50,
    color: '#FFCE73',
  },
  {
    title: 'Digital Ads',
    percentage: 80,
    color: '#FFA2C0',
  },
  {
    title: 'Others',
    percentage: 15,
    color: '#F45252',
  },
]
