import React from "react";
import { useSpring, animated } from 'react-spring'
import list from "../list.png"
export default function Loader() {
  const props = useSpring({ config: { duration: 2000 }, opacity: 1, from: { opacity: 0 }})

  return(
    <div>
    
      <animated.div style={props}>
        <img src={list} alt="list"  href="/" />
    </animated.div>
    
      
    </div>
  )
}