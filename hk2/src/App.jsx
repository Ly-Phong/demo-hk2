import { useState } from "react";
import "./App.css";
import Slidercomponents from "./components/slider/Slidercomponents";
import Slider1 from "./components/slider/img/Slider1.jpg";
import Slider2 from "./components/slider/img/Slider2.png";
import Slider3 from "./components/slider/img/Slider3.jpg";
import Slider4 from "./components/slider/img/Slider4.jpg";
import Topinfo from "./components/topinfohome/Topinfo";
import Tieubieu from "./components/tieubieu/Tieubieu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="slide">
        <Slidercomponents images={[Slider1, Slider2, Slider3, Slider4]} />
      </div>
      <div className="info">
        <Topinfo />
        <Tieubieu />
      </div>
      <br />
    </div>
  );
}

export default App;
