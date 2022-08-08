import { motion, useCycle, Variants } from 'framer-motion';
import React from 'react'
import { Transition } from '../../styles';
import { Colors } from '../../styles/Colors';
import MenuToggler from './MenuToggler'
import Navigation from './Navigation'

const sidebarVariants: Variants = {
  open:
  {
    clipPath: `circle(1000px at 85% 40px)`,
    transition: {
      duration: Transition.SHORT
    },
  },
  closed: {
    clipPath: `circle(30px at 85% 40px)`,
    transition: {
      duration: Transition.SHORT,
      delay: Transition.SHORT
    },
  }
}

const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [open, closed] = Object.keys(sidebarVariants);
  return (
    <motion.nav className='navigation' initial={false} animate={isOpen ? open : closed}>
      <motion.div className='background' variants={sidebarVariants} />
      <MenuToggler toggle={() => toggleOpen()} stroke={Colors.WHITE} />
      <Navigation />
    </motion.nav>
  )
}

export default Navbar