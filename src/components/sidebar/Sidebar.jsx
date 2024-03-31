import React, {useState} from 'react'
import "./sidebar.scss"
import { Links } from './links/Links'
import { ToggleButton } from './toggleButton/ToggleButton'
import { motion } from "framer-motion";

export const Sidebar = () => {
    const[open, setOpen] = useState(false)
    const variants={
        opened: {
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type: "string",
                stiffness: 20,
            }
        },
        closed:{
            clipPath: "circle(30px at 50px 50px",
            transition:{
                delay:0.2,
                type:"spring",
                stiffness:400,
                damping:40,
            }

        }
    }
  return (
    <motion.div className='sidebar' animate={open ? "opened":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}
