// react hook , react
import React, { useEffect, useState } from "react";
// recoil ( 상태관리 )

// react library
import axios from "axios";

// styled-components , Style Files
import { WidthAreaHome } from "../../styles/Layout/Layout";

// Components
import SliderMultiMain from "./SliderCore/SliderMultiMain";

// Icons , Images

// Share , Utils

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
