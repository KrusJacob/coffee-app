import { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import { MainPage, OurCoffeePage, ForYouPleasurePage, SingleCoffeePage } from "../pages/index";

const Content = ({ data, bestCoffee, visibleData, onChangeFilter, onChangeTerm, filter, loading }) => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<MainPage data={bestCoffee} />} />
        <Route
          path="coffee"
          element={
            <OurCoffeePage
              data={visibleData}
              onChangeTerm={onChangeTerm}
              onChangeFilter={onChangeFilter}
              filter={filter}
              loading={loading}
            />
          }
        />
        <Route path=":coffeeId" element={<SingleCoffeePage data={data} />} />
        <Route path="pleasure" element={<ForYouPleasurePage data={data} />} />
      </Routes>
    </div>
  );
};

export default Content;
