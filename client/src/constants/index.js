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
