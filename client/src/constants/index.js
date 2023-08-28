import { IoBarChartSharp } from 'react-icons/io5'
import { BsStarFill } from 'react-icons/bs'
import { BiBuildingHouse } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'

export const navLinks = [
  { text: 'Dashboard', path: '/', icon: IoBarChartSharp },
  { text: 'Property', path: '/property', icon: BiBuildingHouse },
  { text: 'Agent', path: '/agent', icon: FiUsers },
  { text: 'Review', path: '/review', icon: BsStarFill },
]
