import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SliderMultiMain from "./SliderMultiMain";

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
    <>
      <SliderMultiMain data={popularData} />
    </>
  );
}