import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
import Slider from "../components/Slider";

export default function Home() {
  // useEffect(()=>{
  //   async const fetchListings=()=>{

  //   }
  //   fetchListings()
  // },[])
  return (
    <div>
      <Slider />
    </div>
  );
}
