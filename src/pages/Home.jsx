import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
    </div>
  );
}
