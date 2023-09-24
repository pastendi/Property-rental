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
