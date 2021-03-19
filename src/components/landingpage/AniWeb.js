
// import React, { useState } from 'react'
// import useInterval from 'react-useinterval'
// import { useTransition, animated } from 'react-spring';
// import './style.css'

// // const slides = [
// //   ""
// // ]
// const slides = [
//     { id: 0, url: 'photo-1495727034151-8fdc73e332a8?ixlib=rb-1.2.1&w=1181&q=80' },
//     { id: 1, url: 'photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&w=1181&q=80' },
//     // { id: 3, url: 'photo-1597317408873-2e49aed6fa68ixlib=rb-1.2.1&w=1181&q=80' },
//     { id: 2, url: 'photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&w=1181&q=80' },
//     { id: 3, url: 'photo-1527767752678-2a29f2c0b3e9?ixlib=rb-1.2.1&w=1181&q=80' },
//   ]

// const  AniWeb= () => {
//   const [index, set] = useState(0)
//   const item=slides[index]
// const increment = () => set(state => (state+1) % slides.length)
// useInterval(increment,2000)

//   const transitions = useTransition(slides[index], item => item.id, {
//     from: { opacity: 0 , transform:'scale(1.1)'},
//     enter: { opacity: 1 ,transform:'scale(1)'},
//     leave: { opacity: 0 ,transform:'scale(0.9)'},
   
//   })
  
//   return transitions.map(({ item, props, key }) => {
//     return<animated.div
 
//     key={item}
//       className="bg"
//       style={{ ...props,marginTop:50, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` 
//     }}
    
// />
// })
 
// }
   
 
  



// export default  AniWeb

import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./style.css";
import useInterval from "react-useinterval";
const slides = [
  { id: 0, url: "photo-1495727034151-8fdc73e332a8?ixlib=rb-1.2.1&w=1181&q=80" },
  { id: 1, url: "photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&w=1181&q=80" },
  // { id: 3, url: 'photo-1597317408873-2e49aed6fa68ixlib=rb-1.2.1&w=1181&q=80' },
  { id: 2, url: "photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&w=1181&q=80" },
  { id: 3, url: "photo-1527767752678-2a29f2c0b3e9?ixlib=rb-1.2.1&w=1181&q=80" },
];
const AniWeb = () => {
  const [index, set] = useState(0);
  const item = slides[index];
  // useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
  const increment = () => set((state) => (state + 1) % slides.length);
  useInterval(increment, 2000);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className="bg"
          style={{
            ...props,
            marginTop: 50,
            backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
          }}
        />
      ))}
      {/* <h1 align='center' style={{color:'red'}}>Landing Page</h1>    */}
    </div>
  );
};
export default AniWeb;
