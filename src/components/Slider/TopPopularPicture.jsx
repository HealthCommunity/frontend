import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderMultiMain from "./Slider/SliderMultiMain";
import { WidthAreaHome } from "../../styles/Layout/Layout";

export default function TopPopularPicture() {
  const [popularData, setPopularData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/exercisepost/popular`)
      .then(({ data }) => setPopularData(data.data));
  }, []);

  if (!popularData) {
    return <></>;
  }

  return (
    <WidthAreaHome>
      <SliderMultiMain data={popularData} />
    </WidthAreaHome>
  );
}
