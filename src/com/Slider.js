
import {useRef,useEffect,useState} from "react";
import { motion } from "framer-motion";
import images from './images';
import './Slider.css';

const Slider=()=> {
  const carouselRef=useRef();
  const[width,setwidth]=useState(0);
  useEffect(()=>{
    console.log(carouselRef.current.scrollWidth);
    console.log(carouselRef.current);
    setwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  },[]);
  return (
    <div className="slide">
      <motion.div className="carousel" ref={carouselRef}>
       <motion.div drag="x" dragConstraints={{right:0,left:-width}} className="inner">
        {images.map((imge)=>(
           <motion.div className="item" key={imge}>
            <img src={imge}/>
           </motion.div>
        ))}
       </motion.div>
      </motion.div>
    </div>
  );
}


export default Slider;
