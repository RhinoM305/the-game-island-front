import "./index.css";
import NavBar from "./nav/NavBar";
import Landing from "./Landing";

function App() {
  return (
    <>
      <div className="wrapper">
        <div
          className="background-80s animated-clouds stars"
          style={{ "--background-height": "100vh" }}
        >
          <div className="sun"></div>
          <div
            className="grid"
            style={{
              "--grid-color": "rgba(115,59,139,0.7)",
              "--grid-size": "30px",
              "--grid-blur": "1px",
            }}
          ></div>
          <div className="road-off"></div>
          <div className="overlay"></div>
          <svg width="0" height="0">
            <filter id="filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".01"
                numOctaves="10"
                id="fractalNoise"
              />
              <feDisplacementMap
                id="displacementMap"
                in="SourceGraphic"
                scale="120"
              />
            </filter>
            <animate
              xlinkHref="#displacementMap"
              id="animclouds1"
              begin="0; animclouds2.end"
              attributeName="scale"
              from="50"
              to="180"
              dur="3s"
              fill="freeze"
            />
            <animate
              xlinkHref="#displacementMap"
              id="animclouds2"
              begin="animclouds1.end"
              attributeName="scale"
              from="180"
              to="50"
              dur="3s"
              fill="freeze"
            />
            <animate
              xlinkHref="#fractalNoise"
              id="animclouds3"
              begin="0;animclouds4.end"
              attributeName="baseFrequency"
              from="0.03"
              to="0.01"
              dur="30s"
              fill="freeze"
            />
            <animate
              xlinkHref="#fractalNoise"
              id="animclouds4"
              begin="animclouds3.end"
              attributeName="baseFrequency"
              from="0.01"
              to="0.03"
              dur="30s"
              fill="freeze"
            />
          </svg>
        </div>
      </div>

      <NavBar />
      <Landing />
      <div className="h-screen w-screen"></div>
    </>
  );
}

export default App;
